import { Router } from 'express'
import countries from '../mock/countries.json'

const countriesRoute = Router()

countriesRoute.get('/countries', (request, response) => {
  return response.json(countries)
})

export default countriesRoute
