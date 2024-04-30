//Arrrow Functions

const sum = (num1,num2) => num1 +num2

const sub = (num1,num2) => {
    let result = num1 - num2
    return result
}

console.log("Hello")

for(let i = 0; i< 5;i++){
    console.log("I'm learning JS")
}

let i = 5
let number1= 5
let number2 = 6

while(i != 0){
    console.log(`Number1 : ${number1}`);
    console.log(`Number2 : ${number2}`);
    console.log(`The sum: ${sum(number1,number2)} `);
    number1-=1
    number2-=1
    i--
}

i = 5
number1 = 10
number2 = 20

while(i != 0){
    console.log(`Number1 : ${number1}`);
    console.log(`Number2 : ${number2}`);
    console.log(`The sub: ${sub(number1,number2)}`);
    number1-=1
    number2-=1
    i--
}