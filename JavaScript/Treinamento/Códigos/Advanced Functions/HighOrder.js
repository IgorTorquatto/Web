/*
Create an operation function that takes two numbers and an operation function (for example, addition, subtraction). The operation function must apply the operation function to the two numbers and return the result.
Use the operation function with addition and subtraction functions as arguments.
*/

const operation = (number1,number2,op) => op(number1,number2)

const sum = (num1,num2) =>  num1 + num2
const sub = (num1,num2) => num1 - num2

const sumResult = operation(1,2,sum)
console.log(sumResult)

const subResult = operation(5,4,sub)
console.log(subResult)
