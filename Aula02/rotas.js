const http = require('http')
const porta = 3000

const servidor = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'})
    if(req.url == '/curso'){
        res.write('<h1>Seja bem vindo</h1>')
    }else{
        res.write('<h1>Seja mal vindo</h1>')
    }
    res.end()

})
servidor.listen(porta)
    