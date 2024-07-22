/*Create an array with 5 numbers.
Use a for loop to print each number in the array to the console.
Use a while loop to calculate and print the sum of the numbers in the array. */

const array = [1,2,3,4,5]

for(let i = 0; i < array.length; i++){
    console.log(`Position: ${i} value ${array[i]} \n`);
}

let sum = 0
let i = 0

while(i !== array.length){
    if(i === array.length) break
    sum += array[i]
    i++
}

console.log("Sum: "+ sum);