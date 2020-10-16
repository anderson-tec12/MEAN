const express = require('express');
const router = express.Router()

router.use((req,res, next) =>{
    const init = Date.now()
    next()
    console.log(`tempo = ${Date.now() - init} ms.`)
})

//:id dois ponto que dizer variavel e id é o nome do parametro
router.get('/produtos/:id', (req, res)=>{
    res.json({
        id: req.params.id, 
        name : 'Caneta'
    })
})

router.get('/clientes/:id', (req, res)=>{
    res.json({
        id: req.params.id, 
        name : 'João'
    })
})

module.exports = router