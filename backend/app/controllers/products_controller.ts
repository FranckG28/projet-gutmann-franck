import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import User from '#models/user'
import Ingredient from '#models/ingredient'

const DEFAULT_LIMIT = 50

export default class ProductsController {
  async index({ request }: HttpContext) {
    const { search } = request.qs()

    if (!search) {
      return Product.query().preload('ingredients').preload('user').limit(DEFAULT_LIMIT)
    }

    return Product.query()
      .where('name', 'ilike', `%${search}%`)
      .preload('ingredients')
      .preload('user')
      .limit(DEFAULT_LIMIT)
  }

  async get({ params }: HttpContext) {
    return Product.query()
      .where('id', params.id)
      .preload('ingredients')
      .preload('user')
      .firstOrFail()
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
