import React from 'react'
import { Container, Img, ContainerItems, H1, Button, User } from './styles'
import Avatar from '../../assets/User Profile_Monochromatic 2.svg'
import Arrow from '../../assets/arrow-left.png'
import Trash from '../../assets/trash.svg'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Users() {

  //Estado ( React Hook)
  const [users, setUsers] = useState([])
 

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
      <Img alt="logo-image" src={Avatar} />
      <ContainerItems>
        <H1>Usuários</H1>

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

        <Button > <img alt="arrow" src={Arrow} /> Voltar </Button>

      </ContainerItems>
    </Container>
  )
}

export default Users;
