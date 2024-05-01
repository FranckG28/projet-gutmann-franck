/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const AuthController = () => import('#controllers/auth_controller')
const ProductsController = () => import('#controllers/products_controller')
const IngredientsController = () => import('#controllers/ingredients_controller')

router.get('/', async () => 'Welcome')

router.get('ingredients', [IngredientsController, 'index'])
router.get('categories', [IngredientsController, 'categories'])

router.get('products', [ProductsController, 'index'])

router
  .group(() => {
    router.post('login', [AuthController, 'login'])
    router.post('register', [AuthController, 'register'])
  })
  .prefix('auth')
