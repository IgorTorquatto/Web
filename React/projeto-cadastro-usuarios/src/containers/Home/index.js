import React from 'react'
import { Container, Img, ContainerItems, H1, InputLabel, Input, Button } from './styles'
import People from '../../assets/people talking.svg'
import Arrow from '../../assets/arrow-right.svg'
import { useState, useRef } from 'react'
import axios from 'axios'

function Home() {

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

      </ContainerItems>
    </Container>
  )
}

export default Home;
