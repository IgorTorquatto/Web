import React from "react"
import { useState } from "react"

const UseState = () =>{

  const [ number,setNumber ] = useState(0)

  function add (){
    setNumber(number + 1)
  }

  const sub = () => {
    setNumber(number - 1)
  }

  return(
    <>
    <button onClick={add}>increment</button>
    <button onClick={sub}>decrement</button>
    <p style={{fontSize : '30px'}}>{number}</p>
    </>
  )
}

export default UseState