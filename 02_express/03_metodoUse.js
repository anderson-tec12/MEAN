const express = require('express');
const server = express()


//use é universal ou seva get, post , put, delete e podemos passar suburlas
server.use('/api', function(req,res, next){
    console.log('Inicio...')
    next() 
    console.log('FIM...')
})

server.use('/api',function(req, res){
    console.log('Resposta..')
    res.send('<h1>API</h1>')
})

server.listen(3000, function(){
    console.log('Servidor rodadndo na porta 3000')
})