const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const serve = http.createServer((req,res)=>{
    fs.apeendFile('test.txt','qualqurcoisa', (err) => {
      if (err) throw err
      console.log('arquivo criado')
    })
}) 

serve.listen(porta || 3000, () => console.log('Servidor rodando'))