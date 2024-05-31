import React from 'react'
import { Container, Img, ContainerItems, H1, InputLabel, Input, Button, User } from './styles'
import People from './assets/people talking.svg'
import Arrow from './assets/arrow-right.svg'
import Trash from './assets/trash.svg'
import { useState, useRef,useEffect } from 'react'
import axios from 'axios'

function App() {

  //Estado ( React Hook)
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  //Concetar com back-end
  async function addNewUser() {

    const { data:newUser } = await axios.post("http://localhost:3001/users",{  //endereço do backend
      name: inputName.current.value, 
      age: inputAge.current.value }) // informações que são enviadas no body

    console.log(newUser);

    //spread operator
    setUsers([
      ...users,
       newUser])

  }

  //cria o efeito colateral de que sempre que o estado do que estiver dentro dos []  mudar ele chama essa função que pega os usuarios do backend ex: podemos colocar[users]
  //Essa função sempre é chamada ao carregar a página uma primeira vez 
  // como ela pega dados do backend devemos usar o async await e com essa peculiaridade de ser diferente da forma tradicional porque useeffect não aceita o async
  useEffect(()=>{

    async function fetchUsers(){
      const {data: newUsers} = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }

    fetchUsers()
  },[])


  async function deleteUser(userId){

    //No front end:
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)

    //No backend:
    await axios.delete(`http://localhost:3001/users/${userId}`)

  }

  return (
    <Container>
      <Img alt="logo-image" src={People} />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>Cadastrar <img alt="arrow" src={Arrow} /></Button>

        <ul>
          {
            users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <button onClick={()=> deleteUser(user.id)}><img alt="image-trash" src={Trash} /></button>
              </User>
            ))
          }
        </ul>
      </ContainerItems>
    </Container>
  )
}

export default App;
