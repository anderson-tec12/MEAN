const express = require('express');
const server = express()



server.get('/', function(req, res){
    res.send("<h1>Index</h1>")
})

server.all('/teste', function(req, res){
    res.send("<h1>Todos os tipos put. get, post, delete</h1>")
})

server.get(/api/, function(req, res){
    res.send("<h1>Expressao regular</h1>")
})
server.listen(3000, function(){
    console.log('Servidor rodadndo na porta 3000')
})