const express = require('express')
const uuid = require('uuid')
const app = express()
app.use(express.json()) 
const port = 3000

const users = []

app.get('/users',(req,res)=>{
    return res.json(users)
})

//Body params
app.post('/users',(req,res)=>{
    const {name, age} = req.body
    const user = { id : uuid.v4(), name,  age}
    users.push(user)
    return res.status(201).json(user)
})

//Route params
app.put('/users/:id',(req,res)=>{
    const {name, age} = req.body
    const {id} = req.params

    const updateUser = {id,name,age}

    //ACHAR
    //retornar o indice do usuario pelo id
    const index = users.findIndex(user => user.id === id) // se não encontrar reotrna -1

    if( index < 0){
        return res.status(404).json({message: "User not found"})
    }

    //ATUALIZAR
    users[index] = updateUser

    return res.status(200).json(updateUser)
})
app.listen(port)