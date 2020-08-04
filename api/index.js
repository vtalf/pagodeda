const express = require('express')
const fs = require('fs')

const bodyParser = require('body-parser')

const api = express();
api.use(express.static(__dirname + '/public'))
api.use(bodyParser.json())

const port = process.env.PORT || 5555

api.listen(port, () => {
    console.log(`Pagodeda!? Ouvindo na porta: ${port}`)
    console.log(`http://localhost:${port}`)
})
