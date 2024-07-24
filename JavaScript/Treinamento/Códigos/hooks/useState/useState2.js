import React from "react";
import { useState } from "react"

const UseState2 = ()=>{
    const [ text,setText ] = useState("")

    const catchText = (e) =>{
        e.preventDefault()
        const value = e.target.elements.inputText.value
        setText(value)
    }

    return(
        <>
            <form onSubmit={catchText}>
                <input type="text" name = "inputText" />
                <input type="submit" />
            </form>
            <p style={{fontSize: '30px'}}>{text}</p>
        </>
    )
}

export default UseState2