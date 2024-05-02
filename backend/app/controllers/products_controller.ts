import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import User from '#models/user'
import Ingredient from '#models/ingredient'
import { ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'

const DEFAULT_LIMIT = 50

export default class ProductsController {
  private defaultQuery(query: ModelQueryBuilderContract<typeof Product, Product>) {
    return query.preload('ingredients').preload('user').withCount('likedBy').limit(DEFAULT_LIMIT)
  }

  async index({ request }: HttpContext) {
    const { search } = request.qs()

    let query = Product.query()

    if (search) {
      query = query.where('name', 'ilike', `%${search}%`)
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
