import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ingredient_product'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('product_id').unsigned().references('products.id')
      table.integer('ingredient_id').unsigned().references('ingredients.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.primary(['product_id', 'ingredient_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
