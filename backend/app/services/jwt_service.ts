import User from '#models/user'
import env from '#start/env'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import jwt, { Jwt } from 'jsonwebtoken'

const JWT_ACCESS_EXPIRES_IN = '365d'

@inject()
export class JwtService {
  generateAccessToken<T extends object>(data: T): string {
    return jwt.sign(data, env.get('APP_KEY'), { expiresIn: JWT_ACCESS_EXPIRES_IN })
  }

  verifyJwt(token: string): Jwt {
    const bearer = token.split(' ')[1]
    const payload = jwt.verify(bearer, env.get('APP_KEY'), {
      complete: true,
      algorithms: ['HS256'],
      clockTolerance: 0,
      ignoreExpiration: false,
      ignoreNotBefore: false,
    })

    return payload
  }

  async getUser({ request }: HttpContext): Promise<User> {
    console.log('request.jwt', request.jwt)

    if (!(typeof request.jwt?.payload === 'object' && request.jwt?.payload.id)) {
      throw new Error('User not authenticated')
    }

    return await User.findOrFail(request.jwt?.payload.id)
  }
}
