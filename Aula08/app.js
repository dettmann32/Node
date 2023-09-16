const express = require('express')
const app = express()
const router = express.Router()
const server = require('./models/server')
const Usuarios = require('./models/database')
const { json } = require('body-parser')

app.use(json())

app.get('/user', async (req,res)=>{
    const usuarios = await Usuarios.findAll()
    res.json(usuarios)
})

app.post('/user',async(req,res)=>{
    const {id,nome,email} = req.body
    const novoUsuario = await Usuarios.create({
        id:id,
        nome:nome,
        email:email
    })
    res.json(novoUsuario)
})


server(app)
