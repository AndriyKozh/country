import express from 'express'
import countries from './mock/countries.js'

const app = express()

app.get('/countries', (request, response) => {
    return response.json(countries)
})

app.listen(3333, function(){
    console.log(`Listening on port 3333`)
})