const express = require("express")
const app = express()



//config bodyparse

const seleção = []

app.use(express.json())


// rotas 
app.get('/cad',function(req,res){
    res.send(seleção)
 })

app.post('/cad',(req,res)=>{
   seleção.push(req.body)
   res.send('pronto')
})

app.listen(3000)