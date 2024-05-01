import Category from '#models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Category.createMany([
      {
        id: 1,
        name: 'Buns',
        description: 'Various types of buns for burgers',
      },
      {
        id: 2,
        name: 'Patties',
        description: 'Different types of burger patties',
      },
      {
        id: 3,
        name: 'Vegetables',
        description: 'Various vegetables for burgers',
      },
      {
        id: 4,
        name: 'Cheeses',
        description: 'Different types of cheese for burgers',
      },
      {
        id: 5,
        name: 'Sauces',
        description: 'Different sauces for burgers',
      },
    ])
  }
}
