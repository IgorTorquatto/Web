/*
Create a score variable with a random number between 0 and 100.
Use an if/else conditional structure to check the score and print the message: "Passed" if the score is greater than or equal to 60, and "Failed" otherwise.
*/

const number = Math.ceil(Math.random() * 100)

console.log(number)

if(number >= 60){
    console.log("Congratulations, you Passed!")
}else{
    console.log("Failed")
}