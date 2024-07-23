/*
Create an Animal class with a makeSound method. Create Dog and Cat classes that inherit from Animal
and override the makeSound method to print specific sounds.
*/

class Animal{
    constructor(name){
        this.name = name
    }

    makeSound(){
        console.log(".....");
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }

    makeSound(){
        console.log("Au au");
    }
}

class Cat extends Animal{
    constructor(name){
        super(name)
    }

    makeSound(){
        console.log("Meow Meow");
    }
}

const dog = new Dog("bob")
const cat = new Cat("luna")

cat.makeSound()
dog.makeSound()