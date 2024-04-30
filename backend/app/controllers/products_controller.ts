// import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
// import products from '../../data/products.json' with { type: 'json' }

export default class ProductsController {
  async index() {
    return Product.all()
  }
}
