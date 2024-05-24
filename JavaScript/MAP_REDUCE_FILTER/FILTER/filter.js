/*
Também cria um novo array a partir de um array original
cria um novo array APENAS com os elementos filtrados
aceita 3 parâmetros
-item
-index
-array completo

Filtra de forma a retornar apenas o resultado da operação que for true
*/

const students = [
    { name: "João", testgrade: 4 },
    { name: "Maria", testgrade: 4 },
    { name: "Pedro", testgrade: 4 },
    { name: "Ana", testgrade: 7 },
    { name: "Luiza", testgrade: 7 },
    { name: "Carlos", testgrade: 9 },
    { name: "Mariana", testgrade: 9 },
    { name: "Lucas", testgrade: 2 },
    { name: "Isabela", testgrade: 2 },
    { name: "Rafael", testgrade: 2 }
];

const result = student => student.testgrade >=7   //Quando a arrow function tem apenas uma linha o JS coloca o return automaticamente


const student_approveds = students.filter(result)

console.log(student_approveds);