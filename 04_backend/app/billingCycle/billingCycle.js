const restful = require('node-restful'); //expoe uma api 
const mongoose = restful.mongoose;

//esquema de credito
const creditSchema = new mongoose.Schema({
    name:{type: String, required: true },
    value:{type: Number, min: 0 , required: true}
})

//esquema de debito
const debtSchema = new mongoose.Schema({
    name:{type: String, required: true },
    value:{type: Number, min: 0 , required: [true, 'Informe o valor do debito']},
    status:{type:String, required: false, uppercase:true,enum:['PAGO','PENDENTE','AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
    name:{type: String, required: true },
    month:{type:Number, min:1, max:12, required:true},
    year:{type:Number, min: 1970, max:2100, required:true},
    credits:[creditSchema],
    debts:[debtSchema]
})

module.exports = restful.model('billingCycleSchema', billingCycleSchema)