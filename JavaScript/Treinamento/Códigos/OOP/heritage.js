/*
Create a Vehicle class with a type property and a describe method.
Create a Motorcycle class that inherits from Vehicle and add a cylinder capacity property.
Override the describe method in the Moto class.
*/

class Vehicle{
    constructor(type){
        this.type = type
    }

    describe(){
        return console.log(`This vehicle is a ${this.type}`);
    }
}

class Motorcycle extends Vehicle{
    constructor(type,cylinder){
        super(type)
        this.cylinder = cylinder
    }

    describe(){
        return console.log(`This motorcycle is ${this.type} and ${this.cylinder} cylinders.`);
    }
}

const car = new Vehicle("Sport")
car.describe()

const motorcycle = new Motorcycle("sport",600)
motorcycle.describe()