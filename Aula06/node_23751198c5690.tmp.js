const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const porta = process.env.PORT || 3000
const sequelize = new Sequelize('Cadastro','root','',{
    host:'localhost',
    dialect:'mysql'
})



sequelize.authenticate()
.then(()=>{console.log('conectado com sucesso')})
.catch(()=>{console.log('falha na conexão')})



const Usuarios = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    }
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/rota',(res,req)=>{
    
    res.send(req.body.titulo)
})




app.listen(porta, ()=>{console.log('serve runing')})

