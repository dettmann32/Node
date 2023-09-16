//config
const express = require('express')
const app = express()

const repository = require('../repository/repository')



//rotas
class rotas{
    async index(req,res){
        const row = await repository.findALL()
        res.json(row)
    }
    }

    

   


module.exports = new rotas()