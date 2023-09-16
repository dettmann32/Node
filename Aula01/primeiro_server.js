const http = require('http')

http.createServer((response) =>{
    response.writeHead(200,{
        'Content-Type':'text/plain'
    })
    response.write('CFb Cursos ')
    response.end()
}).listen(1337)