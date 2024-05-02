import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import User from '#models/user'
import Ingredient from '#models/ingredient'
import { ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'
import { JwtService } from '#services/jwt_service'
import { inject } from '@adonisjs/core'

const DEFAULT_LIMIT = 50

@inject()
export default class ProductsController {
  constructor(private readonly jwt: JwtService) {
    //
  }

  private defaultQuery(query: ModelQueryBuilderContract<typeof Product, Product>) {
    return query.preload('ingredients').preload('user').withCount('likedBy').limit(DEFAULT_LIMIT)
  }

  async index(ctx: HttpContext) {
    const { request } = ctx

    const { search, view } = request.qs()
    // views = 'trending' | 'latest' | 'liked'

    let query: ModelQueryBuilderContract<typeof Product, Product>

    switch (view) {
      case 'latest':
        query = Product.query().orderBy('created_at', 'desc')
        break
      case 'liked':
        const token = request.header('authorization')
        ctx.request.jwt = this.jwt.verifyJwt(token ?? '')
        const user = await this.jwt.getUser(ctx)

        return user
          .related('likes')
          .query()
          .preload('user')
          .preload('ingredients')
          .withCount('likedBy')
          .limit(DEFAULT_LIMIT)

      default:
        // trending
        query = Product.query()
        // todo : implement trending, sort by likes
        break
    }

    if (search) {
      query = query.whereILike('name', `%${search}%`)
    }

    const results = await this.defaultQuery(query)

    return results
  }

  async get({ params }: HttpContext) {
    return await this.defaultQuery(Product.query().where('id', params.id)).firstOrFail()
  }

  async save({ request }: HttpContext) {
    const data = await request.validateUsing(Product.saveValidator)

    if (!(typeof request.jwt?.payload === 'object' && request.jwt?.payload.id)) {
      throw new Error('User not authenticated')
    }

    const user = await User.findOrFail(request.jwt?.payload.id)

    const ingredients = []
    try {
      for (const ingredientId of data.ingredients) {
        ingredients.push(await Ingredient.findOrFail(ingredientId))
      }
    } catch {
      throw new Error('Invalid ingredient')
    }

    const price = ingredients.reduce((acc, ingredient) => acc + +ingredient.price, 0)

    const product = await user.related('products').create({
      name: data.name,
      description: data.description,
      price,
    })

    await product.related('ingredients').attach(data.ingredients)

    return product
  }
}
