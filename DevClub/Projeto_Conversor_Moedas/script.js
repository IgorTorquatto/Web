//Pegando botão:
const button = document.getElementById("button")

//Definindo valores fixos:
const dolar = 5.14
const euro = 5.56
const bitcoin = 318435.35

const convertValues = () =>{
    //Pegando valor do input
    const input = document.getElementById("input-value").value
    //Pegando valor em real mostrado abaixo da img
    const realValue = document.getElementById("real-value")
    //Pegando valor da moeda após conversão
    const convertedValue = document.getElementById("convert-value")

    //Alterando o número mostrado de valor real com base no input

    realValue.innerHTML = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }).format(input)

    //Fazendo cálculo
    convertedValue.innerHTML = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    }).format(input/dolar)
}

//Pegando o evento de click do botão e chamando uma função quando isso ocorrer
button.addEventListener('click',convertValues)