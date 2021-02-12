import { Router } from 'express'
import usersRoute from './users.routes'
import countriesRoute from './countries.routes'

const routes = Router()

routes.use('/users', usersRoute)
routes.use('/countries', countriesRoute)

export default routes
