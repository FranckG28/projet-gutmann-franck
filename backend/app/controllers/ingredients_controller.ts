// import type { HttpContext } from '@adonisjs/core/http'

import ingredients from '../../data/ingredients.json' with { type: 'json' }

export default class IngredientsController {
  async index() {
    return ingredients
  }
}
