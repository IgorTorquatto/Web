const element = document.getElementById("catchMe")
const button = document.getElementsByTagName("button")[0]

element.innerHTML = "Olá, Mundo!"

button.addEventListener("click", ()=>{
    button.textContent = "Thanks"
})