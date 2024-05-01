import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import User from '#models/user'
import Ingredient from '#models/ingredient'

export default class ProductsController {
  async index() {
    return Product.query().preload('ingredients').preload('user')
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

    console.log('ingredients', ingredients)

    const price = ingredients.reduce((acc, ingredient) => acc + +ingredient.price, 0)

    console.log('price', price)

    const product = await user.related('products').create({
      name: data.name,
      description: data.description,
      price,
    })

    console.log('product', product)

    await product.related('ingredients').attach(data.ingredients)

    return product
  }
}
