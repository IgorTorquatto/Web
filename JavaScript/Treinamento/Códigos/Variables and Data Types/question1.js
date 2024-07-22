//Declare variables of different data types (string, number, boolean, array, object).

const name = "Aemond"
let number = 15
const male = true
const personalInformation = [ 1.65,50 ]
const person = {
    name: name,
    age : 15,
    sex: male,
    height: personalInformation[0]
}

console.log(`Hi, my name is ${person.name}, my weight is ${personalInformation[1]}kg and I ${person.age} years old.`)