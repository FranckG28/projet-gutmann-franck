import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Category from './category.js'
import * as relations from '@adonisjs/lucid/types/relations'
import vine from '@vinejs/vine'

export default class Ingredient extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare name: string

  @column()
  declare price: string

  @column()
  declare description: string

  @column()
  declare thumbnailUrl: string

  @column()
  declare imageUrl: string

  @column()
  declare categoryId: number

  @belongsTo(() => Category)
  declare category: relations.BelongsTo<typeof Category>

  private static schema = vine.object({
    name: vine.string(),
    price: vine.number(),
    description: vine.string(),
    image_url: vine.string(),
    thumbnail_url: vine.string(),
    category: vine.object({
      name: vine.string(),
      description: vine.string().optional(),
    }),
  })

  static get arrayValidator() {
    return vine.compile(vine.array(this.schema))
  }
}
