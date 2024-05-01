import type { HttpContext } from '@adonisjs/core/http'

import Category from '#models/category'
import Ingredient from '#models/ingredient'

export default class IngredientsController {
  async index({ request }: HttpContext) {
    const { search } = request.qs()

    if (!search) {
      return await Ingredient.query().preload('category')
    }

    return await Ingredient.query().where('name', 'ilike', `%${search}%`).preload('category')
  }

  async categories() {
    return await Category.query().preload('ingredients')
  }
}
