import type { HttpContext } from '@adonisjs/core/http'
import products from '../../data/products.json' with { type: 'json' }

export default class ProductsController {
  async index(ctx: HttpContext) {
    return products
  }
}
