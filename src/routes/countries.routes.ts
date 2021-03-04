import { Router } from 'express'
import CountriesRepository from '../repositories/CountriesRepository'

const countriesRoute = Router()

console.log('OKKK')

countriesRoute.get('/', async (request, response) => {
  const countriesRepository = new CountriesRepository()

  const countries = await countriesRepository.findAll()

  return response.json(countries)
})

export default countriesRoute
