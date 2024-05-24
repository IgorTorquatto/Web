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
    // Se o JS encontrar as chaves name e age no request ele já cria as variáveis , se houver uma chave que não existe ele simplesmente não cria
    //destruction assignment
    const {name, age} = request.query

    //Cria um JSON com as chaves name e age e os valores recebidos na requisição
    return response.json({name, age})
})

//Porta que está rodando
app.listen(port, ()=>{
    console.log(`Server run on port ${port}`)
})


//No insomnia podemos mandar os query values tanto na url quanto por interface gráfica