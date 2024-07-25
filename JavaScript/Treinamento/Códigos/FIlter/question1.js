const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 16 }
  ];

const overAge = people.filter((value)=>{
    return value.age > 18
})

console.log(overAge);