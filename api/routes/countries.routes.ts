import { Router } from 'express'
import { NowRequest, NowResponse } from '@vercel/node'
import CountriesRepository from '../repositories/CountriesRepository'

const countriesRoute = Router()

countriesRoute.get('/', async (request: NowRequest, response: NowResponse) => {
  const countriesRepository = new CountriesRepository()

  const countries = await countriesRepository.findAll()

  return response.json(countries)
})

export default countriesRoute
