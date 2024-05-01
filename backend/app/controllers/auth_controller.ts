import User from '#models/user'
import { JwtService } from '#services/jwt_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  // eslint-disable-next-line prettier/prettier
  constructor(private jwt: JwtService) { }

  async login(ctx: HttpContext) {
    const { email, password } = await ctx.request.validateUsing(User.loginValidator)

    let user: User

    try {
      user = await User.findByOrFail('email', email)
    } catch {
      return ctx.response.unauthorized('Invalid credentials')
    }

    if (user.password !== password) {
      return ctx.response.unauthorized('Invalid credentials')
    }

    const jwt = this.jwt.generateAccessToken(user.$attributes)

    return ctx.response.header('Authorization', `Bearer ${jwt}`).send(user.$attributes)
  }

  async register(ctx: HttpContext) {
    const data = await ctx.request.validateUsing(User.registerValidator)

    if (data.password !== data.passwordConfirm) {
      return ctx.response.badRequest('Passwords do not match')
    }

    if (await User.findBy('email', data.email)) {
      return ctx.response.badRequest('User already exists')
    }

    const user = await User.create({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      address: data.address,
      city: data.city,
      zipCode: data.zipCode,
      country: data.country,
    })

    if (!user) {
      return ctx.response.internalServerError('User could not be created')
    }

    const jwt = this.jwt.generateAccessToken(user.$attributes)

    return ctx.response.header('Authorization', `Bearer ${jwt}`).send(user.$attributes)
  }
}
