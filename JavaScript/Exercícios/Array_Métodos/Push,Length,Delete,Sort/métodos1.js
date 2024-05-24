//Desenvolva uma função que receba dois arrays como parâmetros e concatene-os usando o método push(). Retorne o array resultante.
const array_join = (array1,array2) =>{
    let i = 0
    while(i != array2.length){
        array1.push(array2[i])
        i++
    }

}

let boy_students=['Pedro',"João","Marcio"]
let girl_studentes = ["Carla","Joana","Maria"]

array_join(boy_students,girl_studentes)

console.log(boy_students);