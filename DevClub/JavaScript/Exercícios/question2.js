const multiplication_table = (number)=>{
    if(number>= 1 && number <=10){
        for(let i = 0; i <=10 ; i++ ){
            console.log(`${number} X ${i} = ${number * i}`)
        }
    }
    else{
        console.log("Number outside the range 1-10!")
    }
}

multiplication_table(8)