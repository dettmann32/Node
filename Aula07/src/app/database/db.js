
    const mysql = require('mysql2')
    const db = mysql.createConnection({
        user:'root',
        host:'containers-us-west-167.railway.app',
        port:'7748',
        database:'railway',
        password:'6nGmWrI2n7psCXLxtEeW'
    })




module.exports = db




