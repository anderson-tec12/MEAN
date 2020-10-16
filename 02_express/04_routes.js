const express = require('express');
const server = express()

server.route('/clientes')
    .get((req,res)=> res.send('Lista de Cliente'))
    .post((req,res)=> res.send('novo Cliente'))
    .put((req,res)=> res.send('Altera Cliente'))
    .delete((req,res)=> res.send('Deleta Cliente'))

server.listen(3000, function(){
    console.log('Servidor rodadndo na porta 3000')
})