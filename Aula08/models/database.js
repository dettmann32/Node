const Sequelize = require('sequelize')
const sequelize = new Sequelize('usuarios','root','6nGmWrI2n7psCXLxtEeW',{
    host:'lcontainers-us-west-167.railway.app',
    dialect:'mysql'
})


sequelize.authenticate().then(()=>{console.log('serve conectado com sucesso')})


const Usuarios = sequelize.define('usuarios1',{
    nome:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },

});



module.exports = Usuarios 