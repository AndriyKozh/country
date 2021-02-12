import { Router } from 'express'
// import countries from '../mock/countries.json'

type CountryType = {
  name: string;
  region: string;
}

const countries: CountryType[] = []

const countriesRoute = Router()

countriesRoute.get('/', (request, response) => {
  return response.json(countries)
})

countriesRoute.post('/', (request, response) => {

})

export default countriesRoute
