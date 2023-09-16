const express = require('express')
const app = express()
const serve = require('./serve')
const rotas = require('./src/app/rotas')


serve(app)
rotas(app)

