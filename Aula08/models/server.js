const port = process.env.PORT || 3000

function server(app){
    app.listen(port, ()=>{console.log('Serve rodando na porta ' + port)})
}



module.exports = server