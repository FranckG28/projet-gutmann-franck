import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Product from './product.js'
import * as relations from '@adonisjs/lucid/types/relations'
import vine from '@vinejs/vine'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare email: string

  @column()
  declare password: string

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare phone: string

  @column()
  declare address: string

  @column()
  declare city: string

  @column()
  declare zipCode: string

  @column()
  declare country: string

  @hasMany(() => Product)
  declare products: relations.HasMany<typeof Product>

  static loginValidator = vine.compile(
    vine.object({
      email: vine.string().email().trim(),
      password: vine.string().minLength(6),
    })
  )

  static registerValidator = vine.compile(
    vine.object({
      firstName: vine.string(),
      lastName: vine.string(),
      email: vine.string().email().trim(),
      password: vine.string().minLength(6),
      passwordConfirm: vine.string(),
      phone: vine.string(),
      address: vine.string(),
      city: vine.string(),
      zipCode: vine.string(),
      country: vine.string(),
    })
  )
}
