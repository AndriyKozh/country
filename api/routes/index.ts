import { Router } from 'express'
import countriesRoute from './countries.routes'

const routes = Router()

routes.use('/countries', countriesRoute)

export default routes
