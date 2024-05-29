import React from 'react'
import {Container,Img,ContainerItems,H1,InputLabel,Input,Button} from './styles'
import People from './assets/people talking.svg'
import Arrow from './assets/arrow-right.svg'

function App() {
  return (
    <Container>
      <Img alt="logo-image" src={People}/>
      <ContainerItems>
        <H1>Olá!</H1>
    
        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome'/>

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade'/>

        <Button>Cadastrar <img alt="arrow" src={Arrow} /></Button>
      </ContainerItems>
    </Container>
  )
}

export default App;
