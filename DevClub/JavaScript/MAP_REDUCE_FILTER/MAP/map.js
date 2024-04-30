/*
Cria um novo array a partir do array original
Cria um novo array com a mesma quantidade de itens do array original
Aceita 3 parâmetros:
-item do array
-index
-array completo
*/

//Vai iterar sobre os items de um array e usando o return nós vamos preenchendo um novo array com base nas modificações que fazemos na arrow function

const numbers = [1,2,3,4]
const students = [
    {name: "Abe", age: 18},
    {name: "Bia", age: 45},
    {name: "Carlo", age: 47},
    {name: "Decon", age: 25},
    {name: "Eza", age: 23},
]

let newArray = numbers.map( (number) => {
    let newNumber = number *2
    return newNumber
})

console.log(newArray);

const newStudents = students.map( (student) => {
    let modifiedStudent = {
        name: student.name + " Fagundes",
        age: student.age+5
    }
    return modifiedStudent
})

console.log(newStudents);
