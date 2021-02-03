import express from 'express'

const app = express()

app.get('/countries', (request, response) => {
    return response.send('Hello World!')
})

app.listen(3333, function(){
    console.log(`Listening on port 3333`)
})