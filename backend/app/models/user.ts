import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

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
  declare fistName: string

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
}
