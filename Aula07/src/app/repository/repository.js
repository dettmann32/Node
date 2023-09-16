const db = require('../database/db')
db.connect()

class ordem{
    findALL(req,res){
        const sql = "SELECT * FROM usuarios"
        return new Promise((resolve, reject) => {
            db.query(sql, (error, resultado)=>{
                if (error) return reject('Não foi possivel conectar')
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
        

    }
}

module.exports = new ordem