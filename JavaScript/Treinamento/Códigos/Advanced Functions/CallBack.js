/*
Create a process function that takes an array and a callback function. The process function must apply the callback function to each element of the array and return a new array with the results.
Use the process function with a callback function that folds each number in an array.
*/

const process = (array,callback) => {
    const newArray = []

    for(let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    
    return newArray
}

const double = (number) => number * 2

const newArray = process([1,2,3],double)
console.log(newArray);