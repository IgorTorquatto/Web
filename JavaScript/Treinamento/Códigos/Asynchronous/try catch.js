/*
Write a function that returns a Promise that rejects with an error message. 
Use try/catch with async/await to call this function and print the error message to the console.
*/

const newPromise = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Error")
        },2000)
    })
}

const execute = async () =>{
    try{
        const result =  await newPromise()
        console.log(result);
    }catch(error){
        console.log(`The error: ${error}`);
    }
}

execute()

/*
Usa try/catch para capturar a rejeição da Promise.
Tenta esperar a resolução da Promise com await 
Se a Promise for rejeitada, o controle passa para o bloco catch, onde a mensagem de erro é capturada e impressa no console 
*/