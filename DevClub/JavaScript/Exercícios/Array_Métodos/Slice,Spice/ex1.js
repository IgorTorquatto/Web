//Escreva uma função que receba um array e dois índices como parâmetros, e retorne uma cópia do array contendo apenas os elementos entre esses índices.

//Slice -> inclui o primeiro mas não inclui o último (fatia) (se colocar dois parâmetros) [value1,value2[
//O slice cria um novo array , não modifica o original, por isso é bom usarmos uma variável

const copy_array_by_index= (array,index1,index2) => {
    let aux_array = array.slice(index1,index2)
    return aux_array
}

let array = [1,2,3,4,5,6,7,8,9,10]
let newArray = copy_array_by_index(array,1,5)
console.log(newArray);
