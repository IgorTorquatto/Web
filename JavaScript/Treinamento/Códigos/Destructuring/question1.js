/*
Write code that uses destructuring to extract values ​​from a person
object with name and age properties. Do the same for an array of numbers.
*/

const person = {
    name: "Felipe",
    age: 35
}

const { name, age } = person
console.log(name)
console.log(age)