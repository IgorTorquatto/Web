import React from 'react'
import {Container,Img,ContainerItems,H1,InputLabel,Input,Button} from './styles'


function App() {
  return (
    <Container>
      <Img/>
      <ContainerItems>
        <H1>Olá!</H1>
    
        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome'/>

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade'/>

        <Button>Cadastrar</Button>
      </ContainerItems>
    </Container>
  )
}

export default App;
