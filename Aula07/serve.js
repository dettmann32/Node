
const porta = process.env.PORT || 3000


function serve(app){
app.listen(porta, ()=>{console.log('O serve esta rodando em http://localhost:3000')})}




module.exports = serve