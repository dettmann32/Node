const express = require('express')
const app = express()
const serve = require('./serve')
const rotas = require('./src/app/controller/rotas')


serve(app)

app.get('/user',rotas.index)

