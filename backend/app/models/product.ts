import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, hasOne, beforeSave } from '@adonisjs/lucid/orm'
import Ingredient from './ingredient.js'
import * as relations from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Product extends BaseModel {
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

  @beforeSave()
  static async setPrice(product: Product) {
    if (product.$dirty.ingredients) {
      product.price = product.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)
    }
  }

  @hasOne(() => User)
  declare author: relations.HasOne<typeof User>

  // todo : ratings & comments

  // todo : likes

  // todo : remixes

  // todo : orders
}
