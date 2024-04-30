import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('email').notNullable()
      table.string('password').notNullable()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('phone').notNullable()
      table.string('address').notNullable()
      table.string('city').notNullable()
      table.string('zip_code').notNullable()
      table.string('country').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
