//Express
const express = require('express')
const app = express()

//Libs
const uuid = require('uuid')

app.use(express.json()) 
const port = 3000

const users= []

//MiddleWares:
const checkID = (req,res,next)=>{
    const { id } = req.params
    const index = users.findIndex( user => user.id === id) //percorre o vetor users

    if( index < 0 ){
        return res.status(404).json({error:"User not found"})
    }

    req.userIndex = index; // Salva o índice do usuário encontrado na requisição
    next()
}

app.get('/',(request,response)=>{
    response.send("Test")
})

app.get('/order',(req,res)=>{
    return res.json(users)
})

app.get('/order/:id',checkID,(req,res)=>{
    const index = req.userIndex

    const order = users[index].order
    
    return res.json({order: order})
})

app.post('/order',(req,res)=>{
    const id = uuid.v4()
    const { order, clientName, price} = req.body
    
    const user = {id: id, order, clientName, price, status: "Em preparação"}

    users.push(user)

    res.status(201).json({message: "Usuário criado com sucesso", NomeUsuario: user.clientName, Identificador: user.id})
})

app.put('/order/:id',checkID, (req,res)=>{
    const { id } = req.params
    const index = req.userIndex

    users[index].order = " Pizza da promoção"
    users[index].price = 20
    
    res.status(204).json({message: "Usuário atualizado com sucesso", id: id})
})

app.delete('/order/:id',checkID,(req,res)=>{
    const index = req.userIndex

    users.splice(index,1)

    res.status(204).json({message:"Usuário excluido com sucesso"})
})

app.patch('/order/:id',checkID,(req,res)=>{
    const index = req.userIndex

    users[index].status = "Pronto"

    res.status(204).json({message: "Pedidido pronto"})
})

app.listen(port,()=>{
    console.log(`Server run on ${port}`)
})