const express = require('express')
const app = express()
const port = 3000

//Route Params, na requisição será criado uma chave com nome 'id' e valor dinâmico que passamos na requisição 
//exemplo /users/2 criará   params: { id: '2' }

app.get('/users/:id',(request,response)=>{
    const {id} = request.params
    return response.json({id})
})


app.listen(port, ()=>{
    console.log(`Server run on port ${port}`)
})