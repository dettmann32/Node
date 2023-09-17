const port = process.env.PORT || 3000

function server(app){
    app.listen(port, (err)=>{
        if(err) console.error(err)
        console.log('Runing server')
    }
        )
}

module.exports = server