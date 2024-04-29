const hour = ()=>{
    let currentTime = new Date()
    let infosHour = [currentTime.getHours(),currentTime.getMinutes(),currentTime.getSeconds()]
    let stringHour = infosHour.join(":")
    return stringHour
}
const year = () => {
    let currentTime = new Date()
    return currentTime.getFullYear()
}
console.log(`Hello, the exact time is ${hour()} of ${year()}`)
