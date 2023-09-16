const express = require('express')
const rota = require('./rotas')
const porta = process.env.PORT || 3000
const app = express()



app.use('/',rota)


app.use('*',(req,res)=>{
    res.send('cbfcursoide')
})


app.listen(porta,()=>{console.log('rodando')})