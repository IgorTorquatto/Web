/*
Retorna um novo valor pode ser um novo array, um obj, string,number , etc
aceita 4 parametros
-acumulador
-valor atual
-indice
-array completo

*/

const array = [1,2,3,4]

const sum = array.reduce( (acumulador,atual) =>{
    return acumulador + atual
},0)

console.log(sum);