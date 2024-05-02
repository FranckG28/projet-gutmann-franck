import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, belongsTo } from '@adonisjs/lucid/orm'
import Ingredient from './ingredient.js'
import * as relations from '@adonisjs/lucid/types/relations'
import User from './user.js'
import vine from '@vinejs/vine'

export default class Product extends BaseModel {
  serializeExtras = true

  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare price: number

  @manyToMany(() => Ingredient)
  declare ingredients: relations.ManyToMany<typeof Ingredient>

  @belongsTo(() => User)
  declare user: relations.BelongsTo<typeof User>

  @column()
  declare userId: number

  @manyToMany(() => User, {
    pivotTable: 'user_likes',
  })
  declare likedBy: relations.ManyToMany<typeof User>

  // todo : ratings & comments

  // todo : likes

  // todo : remixes

  // todo : orders

  static saveValidator = vine.compile(
    vine.object({
      name: vine.string().minLength(3).maxLength(80),
      description: vine.string().maxLength(255).optional(),
      ingredients: vine.array(vine.number().positive()),
    })
  )
}
