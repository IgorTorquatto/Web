const form =document.getElementById("myForm")

form.addEventListener("submit",()=>{
    event.preventDefault()

    const text = document.getElementById("myText")
    const textValue = text.value 

    const newParagraph = document.createElement("p")
    newParagraph.textContent = textValue

    const paragraphDiv = document.getElementById("paragraphs")
    paragraphDiv.appendChild(newParagraph)

    text.value = ""
})