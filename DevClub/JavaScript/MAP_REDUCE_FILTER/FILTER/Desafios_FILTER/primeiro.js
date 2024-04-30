//Criar novo array só com números pares e divisíveis por 5 do array original

const array = [2, 4, 6, 8, 10, 64, 55, 77, 32, 88, 91, 50, 23, 75, 99, 42, 11, 66, 34, 18];

const even_and_divisible_by_2 = (number) =>  number % 5 == 0 && number % 2 == 0

const new_array = array.filter(even_and_divisible_by_2)

console.log(new_array);