const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 16 }
  ];

const namesPeople = people.map((value)=>{
    return value.name
})

const initialA = namesPeople.filter((value)=>{
    return value.includes('A')
})

console.log(initialA);