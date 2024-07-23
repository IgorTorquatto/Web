/*
Write a function that uses the rest operator to receive a variable number of arguments and returns the sum of them all.
Also write code that uses the spread operator to combine two arrays into one.
*/

const sum = (num1,num2,...rest) => {
    let array = []
    array.push(num1,num2,...rest)
    const total = array.reduce((accumulator,currentValue)=>{
        return accumulator += currentValue
    })
    return total
}

let totalSum = sum(1,2,3,4)
console.log(totalSum)

const arrayA = [5,6,7,8,9]
const arrayB = [10,11,12,13]

const newArray = [...arrayA,...arrayB]
console.log(newArray);

const doubleNewArray = newArray.map((value)=>{
    return value * 2
})

console.log(doubleNewArray);