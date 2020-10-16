const port = 3003;

const bodyParser = require('body-parser');
const express = require('express')
const server = express()
const allowCors = require('./cor')

//formato dos dados ao submeter via formulario
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log("BACKEND is running on port: ", port)
})

// server.use(function(req, res,next){
//     res.send('Inicio serveriniciado com sucesso')
// })

module.exports = server