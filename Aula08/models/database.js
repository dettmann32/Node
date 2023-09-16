const Sequelize = require('sequelize')
const sequelize = new Sequelize('railway','root','L25EaS7DcwAi1SCXOTFB',{
    host:'containers-us-west-165.railway.app',
    dialect:'mysql',
    port:'7904'
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