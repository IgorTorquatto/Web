//Index.js é um exemplo de servidor e para ele executar precisamos passar os seguintes comandos no terminal:
// node index.js
// A aplicação estará executando na porta 3000 do localhost

//Importação
const express = require('express')
port = 3000

//Colocado express dentro da variável app
const app = express()

//Criando rota:
app.get('/users', (request,response)=>{
    return response.send('Hello Express!')
})

//Porta que está rodando
app.listen(port, ()=>{
    console.log(`Server run on port ${port}`)
})