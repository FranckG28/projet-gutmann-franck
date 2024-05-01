import Ingredient from '#models/ingredient'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const ingredients = [
      {
        name: 'Regular Bun',
        price: 0.5,
        description: 'Classic burger bun',
        imageUrl: 'https://i.postimg.cc/sgWWnDnR/regular-bun.png',
        categoryId: 1,
      },
      {
        name: 'Sesame Bun',
        price: 0.6,
        description: 'Burger bun with sesame seeds',
        imageUrl: 'https://i.postimg.cc/ydjcFQLg/sesame-bun.png',
        categoryId: 1,
      },
      {
        name: 'Whole Wheat Bun',
        price: 0.7,
        description: 'Healthy whole wheat burger bun',
        imageUrl: 'https://i.postimg.cc/Twt5yyPn/whole-wheat-bun.png',
        categoryId: 1,
      },
      {
        name: 'Beef Patty',
        price: 2.5,
        description: 'Juicy beef patty',
        imageUrl: 'https://i.postimg.cc/PqmmqrZM/beef-patty.png',
        categoryId: 2,
      },
      {
        name: 'Chicken Patty',
        price: 2.0,
        description: 'Tender chicken patty',
        imageUrl: 'https://i.postimg.cc/TYpgDcg1/chicken-patty.png',
        categoryId: 2,
      },
      {
        name: 'Veggie Patty',
        price: 1.5,
        description: 'Delicious vegetarian patty',
        imageUrl: 'https://i.postimg.cc/yd1SYh7V/veggie-patty.png',
        categoryId: 2,
      },
      {
        name: 'Lettuce',
        price: 0.3,
        description: 'Fresh lettuce leaves',
        imageUrl: 'https://i.postimg.cc/3rL2Nqyz/lettuce.png',
        categoryId: 3,
      },
      {
        name: 'Tomato',
        price: 0.4,
        description: 'Ripe tomato slices',
        imageUrl: 'https://i.postimg.cc/vmLVs2Fq/tomato.png',
        categoryId: 3,
      },
      {
        name: 'Onion',
        price: 0.2,
        description: 'Sliced onions',
        imageUrl: 'https://i.postimg.cc/ncg7YQGk/onion.png',
        categoryId: 3,
      },
      {
        name: 'Cheese',
        price: 0.8,
        description: 'Melted cheese',
        imageUrl: 'https://i.postimg.cc/xCnLND3V/cheese.png',
        categoryId: 4,
      },
      {
        name: 'Ketchup',
        price: 0.2,
        description: 'Classic ketchup',
        imageUrl: 'https://i.postimg.cc/nrL7T4Wd/ketchup.png',
        categoryId: 5,
      },
      {
        name: 'Mustard',
        price: 0.2,
        description: 'Tangy mustard',
        imageUrl: 'https://i.postimg.cc/KYyMCSV3/mustard.png',
        categoryId: 5,
      },
      {
        name: 'Mayonnaise',
        price: 0.3,
        description: 'Creamy mayonnaise',
        imageUrl: 'https://i.postimg.cc/PJFD7Lsd/mayonnaise.png',
        categoryId: 5,
      },
    ]

    await Ingredient.createMany(ingredients)
  }
}
