const students = [
    { name: "João", testgrade: (Math.random() * 10).toFixed(2) },
    { name: "Maria", testgrade: (Math.random() * 10).toFixed(2) },
    { name: "Pedro", testgrade: (Math.random() * 10).toFixed(2) },
    { name: "Ana", testgrade: (Math.random() * 10).toFixed(2) },
    { name: "Luiza", testgrade: (Math.random() * 10).toFixed(2) },
    { name: "Carlos", testgrade: (Math.random() * 10).toFixed(2) },
    { name: "Mariana", testgrade: (Math.random() * 10).toFixed(2) },
    { name: "Lucas", testgrade: (Math.random() * 10).toFixed(2) },
    { name: "Isabela", testgrade: (Math.random() * 10).toFixed(2) },
    { name: "Rafael", testgrade: (Math.random() * 10).toFixed(2) }
];

const result = (student) =>{
    if(student.testgrade >= 7){
        return {name: student.name, testgrade: student.testgrade, result: "approved"}
    }
    else{
        return {name: student.name, testgrade: student.testgrade, result: "Disapproved"}
    }
}

console.log(students);

const result_students = students.map(result)
console.log(result_students);