//Desenvolva uma função que receba um array e um valor como parâmetros, e remova todas as ocorrências desse valor do array utilizando o método splice
const remove_values = (array,number) => {
    let length_array = array.length

    while(array.indexOf(number) != -1){
        for(let i = 0; i < length_array;i++){
            if(array[i]== number){
                array.splice(i,1)
            }
        }
    }
}

let array = [1,2,2,2,2,2,3,4,5]
let array2 = [1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5]

remove_values(array,2)
remove_values(array2,5)

console.log(array);
console.log(array2);