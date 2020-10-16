const express = require('express');
const server = express()
//chang off responsability
server.get('/', function(req,res, next){
    console.log('Inicio...')
    next() // chama a proxima função da cadeia, depois retorna
    console.log('FIM...')
})

server.get('/',function(req, res){
    console.log('Resposta..')
    res.send('<h1>Ola express </h1>')
})

server.listen(3000, function(){
    console.log('Servidor rodadndo na porta 3000')
})