const _ = require('lodash')

const alunos = [
    {
        nome:"Raphael",
        nota:7.6
    },
    {
        nome: "Davi",
        nota:8.6
    },
    {
        nome: "Gabriel",
        nota:8.1
    }
]

const media = _.sumBy(alunos,'nota') / alunos.length
console.log(media)