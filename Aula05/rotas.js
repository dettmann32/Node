const express = require('express')
const rotas = express.Router()


let cursoInfo = [
    {'curso':'node', 'info':'curso de node'},
    {'curso':'java', 'info':'curso de java'},
    {'curso':'react', 'info':'curso de react'},
    {'curso':'arduino', 'info':'curso de arduino'}
]


rotas.get('/',(req,res)=>{
    res.json({ola:'Seja bem vindo'})
})

rotas.get('/:cursoid',(req,res)=>{
    const curso = req.params.cursoid
    const cursoI = cursoInfo.find(i =>i.curso ==curso)
    if(!cursoI){
        res.status(404).json(
            {erro:'Curso não encontrado',cursoPesquisado:curso}
        )
    }else{
        res.status(200).json(cursoI)
    }
})

module.exports = rotas