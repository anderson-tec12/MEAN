const express = require('express')


module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    router.route('/teste').get(function(req, res, next){
        res.send('teste funcionou')
    })

    //ROTAS API

    const billingCycleService = require('../app/billingCycle/billingCycleServer')
    billingCycleService.register(router, '/billingCycles')

    const billingSummaryService = require('../app/billingSumary/billingSumaryService.js')
    router.route('/billingSummary').get(billingSummaryService.getSummary) 
}
