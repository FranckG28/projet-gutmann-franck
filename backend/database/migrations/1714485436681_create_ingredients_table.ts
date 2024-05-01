import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ingredients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('name').notNullable()
      table.decimal('price').notNullable()
      table.text('description').notNullable()

      table.string('image_url').notNullable()
      table.string('thumbnail_url')

      table.integer('category_id').unsigned().references('categories.id').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
