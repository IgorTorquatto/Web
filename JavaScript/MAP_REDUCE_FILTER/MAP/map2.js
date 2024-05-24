const numbers = [1,2,3,4]
const double = number => number *2
const sum = number => number + 10

let newNumbers = numbers.map(double).map(sum)

console.log(newNumbers);