const express = require('express');
const server = express()
const router = require('./05_routes')

server.use('/api', router)

server.listen(3000, function(){
    console.log('Servidor rodadndo na porta 3000')
})

//teste http://localhost:3000/api/clientes/1
//teste http://localhost:3000/api/produtos/1