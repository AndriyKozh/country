import { Router } from 'express'
import createUser from '../services/createUser'

const usersRoute = Router()

usersRoute.post('/new', (request: NowRequest, response: NowResponse) => {
  const { name, email, password } = request.body

  const user = createUser({
    name,
    email,
    password
  })

  return response.json(user)
})

export default usersRoute
