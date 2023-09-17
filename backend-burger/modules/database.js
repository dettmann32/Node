const Sequelize = require('sequelize')
const sequelize = new Sequelize('railway','root','K7I3EB4yA8Ro3qlwk84u',{
    host:'containers-us-west-170.railway.app',
    port:'6309',
    dialect:'mysql'
})

//autenticação

sequelize.authenticate().then(()=> {console.log('Conected database')}).catch((err)=>{console.error('Not founded',err)})

//Pães

const Paes = sequelize.define('paes',{
    tipo:{
        type:Sequelize.TEXT
    }
});

//Carnes

const Carnes = sequelize.define('carnes',{
    tipo:{
        type:Sequelize.TEXT
    }
})

//pedidos dos clientes

const Burgers = sequelize.define('burgers',{
    pao:{
        type:Sequelize.TEXT
    },
    carne:{
        type:Sequelize.TEXT
    },
    name:{
        type:Sequelize.TEXT
    }
})



module.exports = {sequelize, Paes, Carnes, Burgers}


