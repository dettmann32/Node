const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/',(req,res)=>{
    res.json({Eu:'lucas'})
}).listen(3000)