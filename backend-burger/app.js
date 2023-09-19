const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

//body-parser
const { json } = require('body-parser')
app.use(json())

// importando o server
const server = require('./server')


//importando variaveis do db
const data = require('./modules/database')


//rota get paes
app.get('/paes',async (req,res)=>{
    const resposta = await data.Paes.findAll()
    res.json(resposta)
})

//rota get carnes
app.get('/carnes', async (req,res)=>{
    const carne = await data.Carnes.findAll()
    res.json(carne)
})

//rota post burgers
app.post('/burgers',async (req,res)=>{
    const {pao, carne, name} = await req.body
    const burgers = await data.Burgers.create({
        pao,
        carne,
        name
        
    })
    res.json(burgers)
})

//rota get burgers
app.get('/burgers',async (req,res)=>{
    const burger = await data.Burgers.findAll()
    res.status(201).json(burger)
})

//rota get burgers por id
app.get('/burgers/:id', async (req,res)=>{
    const id = req.params.id
    const burger = await data.Burgers.findByPk(id)
    res.status(201).json(burger)
})

//rota delete
app.delete('/burgers/:id', async (req,res)=>{
    
    const id = req.params.id
    const burger = await data.Burgers.findByPk(id)
    await burger.destroy()
    
    

    
})



server(app)