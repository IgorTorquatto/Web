//Pegando botão:
const button = document.getElementById("button")
//Pegando select:
const select = document.getElementById("currency-select")

const convertValues = async() =>{
    //Pegando valor do input
    const input = document.getElementById("input-value").value
    //Pegando valor em real mostrado abaixo da img
    const realValue = document.getElementById("real-value")
    //Pegando valor da moeda após conversão
    const convertedValue = document.getElementById("convert-value")

    const data =  await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    //Alterando o número mostrado de valor real com base no input

    realValue.innerHTML = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }).format(input)

    //Fazendo cálculo
    if(select.value === "U$ Dolár americano"){
        convertedValue.innerHTML = new Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD'
        }).format(input/dolar)
    }

    if(select.value === "€ Euro"){
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE',{
            style: 'currency',
            currency: 'EUR'
        }).format(input/euro)
    }

    if (select.value ==="Bitcoin"){
        convertedValue.innerHTML = (input/bitcoin)
    }
}

const changeCurrency = () => {
    const currentCurrency = document.getElementById("current-currency")
    const currentImg = document.getElementById("current-img")

    if(select.value === "€ Euro"){
        currentCurrency.innerHTML = 'Euro'
        currentImg.src = "./assets/euro.png"
    }

    else if(select.value ==="Bitcoin"){
        currentCurrency.innerHTML = 'Bitcoin'
        currentImg.src = "./assets/bitcoin.png"
    }

    else if(select.value === "U$ Dolár americano"){
        currentCurrency.innerHTML = 'Dolár'
        currentImg.src = "./assets/estados-unidos (1) 1.png"
    }

    convertValues()
}

//Pegando o evento de click do botão e chamando uma função quando isso ocorrer
button.addEventListener('click',convertValues)
select.addEventListener('change', changeCurrency)