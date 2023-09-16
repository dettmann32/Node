
function click(){



 fetch('http://localhost:3000/cad',{
        method:'POST',
        body: {
            "id":"1",
            "lucar":"cidade"
        },
        headers:{
            'Content-Type':'application/json' }
    })
    }
    




