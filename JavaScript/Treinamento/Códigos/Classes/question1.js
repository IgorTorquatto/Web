/*
Write a Person class with name and age properties, and a present method
 that prints a message saying "Hello, my name is [name] and I am [age] years old."
*/

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    present(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person = new Person("Igor",15)
person.present()
