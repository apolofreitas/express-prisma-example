import usersController from '@/modules/users/users.controller'
import { Router } from 'express'

const routes = Router()

routes.get('/users', usersController.index)
routes.post('/users', usersController.create)
routes.get('/users/:target', usersController.show)
routes.put('/users/:target', usersController.update)

export default routes
