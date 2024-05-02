import Product from '#models/product'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class LikesController {
  private async getUser({ request }: HttpContext): Promise<User> {
    if (!(typeof request.jwt?.payload === 'object' && request.jwt?.payload.id)) {
      throw new Error('User not authenticated')
    }

    return await User.findOrFail(request.jwt?.payload.id)
  }

  async index(ctx: HttpContext) {
    const user = await this.getUser(ctx)

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

    const user = await this.getUser(ctx)

    await user.related('likes').attach([productId])

    return true
  }

  async delete(ctx: HttpContext) {
    const productId = ctx.request.input('product_id')

    if (!productId) {
      throw new Error('Product ID is required')
    }

    const user = await this.getUser(ctx)

    await user.related('likes').detach([productId])

    return true
  }
}
