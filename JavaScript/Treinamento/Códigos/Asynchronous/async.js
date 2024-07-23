const exampleFunction =  () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise reolved")
        },2000)
    })
}

const printMessage = async () => {
   const message = await exampleFunction()
   console.log(message);
}

printMessage()