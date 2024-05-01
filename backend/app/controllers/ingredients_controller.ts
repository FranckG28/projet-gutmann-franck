// import type { HttpContext } from '@adonisjs/core/http'

import Category from '#models/category'
import Ingredient from '#models/ingredient'

export default class IngredientsController {
  async index() {
    return await Ingredient.query().preload('category')
  }

  async categories() {
    return await Category.query().preload('ingredients')
  }
}
