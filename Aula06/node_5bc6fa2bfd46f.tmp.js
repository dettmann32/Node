const express = require('express')
const app = express()
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

Usuarios.sync({force:true})


app.listen(porta, ()=>{console.log('serve runing')})

