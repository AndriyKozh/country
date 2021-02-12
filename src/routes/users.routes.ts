import { Router } from 'express'
import createUser from '../services/createUser'

const usersRoute = Router()

usersRoute.post('/', (request, response) => {
  const { name, email, password } = request.body

  const user = createUser({
    name,
    email,
    password
  })

  return response.json(user)
})

export default usersRoute
