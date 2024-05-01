/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const AuthController = () => import('#controllers/auth_controller')
const ProductsController = () => import('#controllers/products_controller')
const IngredientsController = () => import('#controllers/ingredients_controller')

router.get('/', async () => 'Welcome')

router.get('ingredients', [IngredientsController, 'index'])
router.get('categories', [IngredientsController, 'categories'])

router.get('products', [ProductsController, 'index'])
router.get('products/:id', [ProductsController, 'get'])
router.post('products', [ProductsController, 'save']).middleware(middleware.jwt())

router
  .group(() => {
    router.post('login', [AuthController, 'login'])
    router.post('register', [AuthController, 'register'])
  })
  .prefix('auth')
