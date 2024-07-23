/*
Write a function that returns a Promise that resolves after 2 seconds with the message "Promise resolved".
Call this function and use .then to print the message to the console.
*/

const exampleFunction = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Promise resolved")
        },2000)
    })
}

exampleFunction().then((msg)=>{
    console.log(msg);
})