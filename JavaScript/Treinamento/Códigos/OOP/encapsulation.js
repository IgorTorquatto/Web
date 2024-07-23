/*
Create a Bank Account class with private 
properties _balance and public deposit and withdrawal methods that change _balance.
*/

class BankAccount{
    #_balance
    constructor(initialBalance = 0){
        this.#_balance = initialBalance
    }

    getBalance(){
        return console.log(this.#_balance)
    }

    deposit(value){
        if(value > 0){
            this.#_balance += value
            console.log("Success");
        }else{
            console.log("Negative value!");
        }
    }

    withdrawal(value){
        if(value < 0){
            console.log("do not enter negative numbers");
        }
        if(value> this.#_balance){
            console.log("insufficient funds");
        }
        this.#_balance -= value
        console.log("Sucess");
    }
}

const account = new BankAccount()
account.getBalance()

account.deposit(10)
account.getBalance()

account.withdrawal(10)
account.getBalance()