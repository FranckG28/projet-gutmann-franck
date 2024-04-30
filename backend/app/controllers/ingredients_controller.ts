// import type { HttpContext } from '@adonisjs/core/http'

import Ingredient from '#models/ingredient'
// import ingredients from '../../data/ingredients.json' with { type: 'json' }

export default class IngredientsController {
  async index() {
    return await Ingredient.all()
  }
}
