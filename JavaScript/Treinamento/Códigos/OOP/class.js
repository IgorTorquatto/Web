/*
Create a Car class with brand and model properties, and a describe method that prints a message with these properties.
*/

class Car{
    constructor(model,brand){
        this.brand = brand
        this.model = model
    }

    describe(){
        console.log(`This is model ${this.model} car from brand ${this.brand}`);
    }
}

const car = new Car("Hilux","Chevrolet")
car.describe()