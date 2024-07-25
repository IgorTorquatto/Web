const numbers = [10, 20, 30, 40, 50];

const sumNumbers = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
})

console.log(sumNumbers);