import { JwtService } from '#services/jwt_service'
import { loginValidator, registerValidator } from '#validators/auth.validators'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { randomUUID } from 'node:crypto'

const DEFAULT_EMAIL = 'contact@franck-g.fr'
const DEFAULT_PASSWORD = 'password'

@inject()
export default class AuthController {
  // eslint-disable-next-line prettier/prettier
  constructor(private jwt: JwtService) { }

  async login(ctx: HttpContext) {
    const { email, password } = await ctx.request.validateUsing(loginValidator)

    if (email !== DEFAULT_EMAIL || password !== DEFAULT_PASSWORD) {
      return ctx.response.unauthorized('Invalid credentials')
    }

    const user = { email, id: randomUUID() }
    const jwt = this.jwt.generateAccessToken(user)

    return ctx.response.header('Authorization', `Bearer ${jwt}`).send(user)
  }

  async register(ctx: HttpContext) {
    const { email } = await ctx.request.validateUsing(registerValidator)

    if (email === DEFAULT_EMAIL) {
      return ctx.response.badRequest('Email already exists')
    }

    const user = { email, id: randomUUID() }
    const jwt = this.jwt.generateAccessToken(user)

    return ctx.response.header('Authorization', `Bearer ${jwt}`).send(user)
  }
}
