//Escreva uma função que receba um array como entrada e remova todos os elementos repetidos, mantendo apenas uma ocorrência de cada elemento
const remove_repeated_elements = (array) => {
    let aux_array = []
    let i = 0
    aux_array.push(array[0])

    while (i != array.length){
        if(aux_array.indexOf(array[i]) == -1){
            aux_array.push(array[i])
        }
        i++
    }

    return aux_array
}
let array = [1,2,2,3,3,4,4,5,5,6,7,8,6,9,10,10]

array = remove_repeated_elements(array)

console.log(array);