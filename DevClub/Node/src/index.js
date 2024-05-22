const express = require('express')
const uuid = require('uuid')
const app = express()
app.use(express.json()) 
const port = 3000

const users = []
//Middleware -> Tem o poder de para ou alterar os dados da requisição
//Ex de middleware:

const checkUserId = (request,response,next)=>{
     const { id } = request.params
     const index = users.findIndex(user => user.id ===id)

     if( index < 0 ){
        return response.status(404).json({error:"User not found"})
     }

     //altera os dados
     request.userIndex = index
     request.userId = id

     next()
}

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
app.put('/users/:id',checkUserId,(req,res)=>{
    const {name, age} = req.body
    const {id} = req.userId
    const index = req.userIndex
    const updateUser = {id,name,age}

    users[index] = updateUser

    return res.json(updateUser)
})

app.delete('/users/:id',checkUserId,(req,res)=>{
    const index = req.userIndex

    users.splice(index,1)

    return res.status(204).json()
})

app.listen(port)