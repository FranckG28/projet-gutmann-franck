import Product from '#models/product'
import { JwtService } from '#services/jwt_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class LikesController {
  constructor(private readonly jwt: JwtService) {
    //
  }

  async index(ctx: HttpContext) {
    const user = await this.jwt.getUser(ctx)

    return user.related('likes').query()
  }

  async save(ctx: HttpContext) {
    const productId = ctx.request.input('product_id')

    if (!productId) {
      throw new Error('Product ID is required')
    }

    const product = await Product.findOrFail(productId)

    if (!product) {
      throw new Error('Product not found')
    }

    const user = await this.jwt.getUser(ctx)

    await user.related('likes').attach([productId])

    return true
  }

  async delete(ctx: HttpContext) {
    const productId = ctx.request.input('product_id')

    if (!productId) {
      throw new Error('Product ID is required')
    }

    const user = await this.jwt.getUser(ctx)

    await user.related('likes').detach([productId])

    return true
  }
}
