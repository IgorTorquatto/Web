const students = [
    {name: "Abe", age: 18},
    {name: "Bia", age: 45},
    {name: "Carlo", age: 47},
    {name: "Decon", age: 25},
    {name: "Eza", age: 23},
]

students.forEach( (student,index)=>{
    console.log(`The student in postion ${index} is ${student.name} age ${student.age}`);
})