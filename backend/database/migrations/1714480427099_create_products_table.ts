import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('name').notNullable()
      table.string('description').notNullable()
      table.decimal('price').notNullable()

      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
