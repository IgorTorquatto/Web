/*
Create a person object with the properties name, age and city.
Add a present method that prints a message like "Hello, my name is [name], I'm [age] years old, and I live in [city]."
Call the present method on the person object.
*/

const person = {
    name: "Igor",
    age: 22,
    city: "Juazeiro do Norte",
    present: function(){
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old, and I live in ${this.city}.`);
    }
}

person.present()