const express = require('express')
const app = express()

//body-parser
const { json } = require('body-parser')
app.use(json())

// importando o server
const server = require('./server')

//importando o db
const sequelize = require('./modules/database')

//importando variaveis do db
const data = require('./modules/database')


//rota get paes
app.get('/paes',async (req,res)=>{
    const resposta = await data.Paes.findAll()
    res.status(201).json(resposta)
})

//rota get carnes
app.get('/carnes', async (req,res)=>{
    const carne = await data.Carnes.findAll()
    res.status(201).json(carne)
})

//rota post burgers




server(app)