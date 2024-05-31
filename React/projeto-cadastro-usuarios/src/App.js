import React from 'react'
import { Container, Img, ContainerItems, H1, InputLabel, Input, Button, User } from './styles'
import People from './assets/people talking.svg'
import Arrow from './assets/arrow-right.svg'
import Trash from './assets/trash.svg'
import { useState, useRef } from 'react'
import axios from 'axios'

function App() {

  //Estado ( React Hook)
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  //Concetar com back-end
  async function addNewUser() {

    const data = await axios.post("http://localhost:3001/users",{  //endereço do backend
      name: inputName.current.value, 
      age: inputAge.current.value }) // informações que são enviadas no body

    console.log(data);

    //spread operator
    // setUsers([
     // ...users,
       //{ id: Math.random(),
       //  name: inputName.current.value,
         // age: inputAge.current.value }])

  }

  const deleteUser = (userId)=>{
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
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
