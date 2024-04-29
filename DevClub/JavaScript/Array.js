//Existem vários métodos disponíveis para lidar com arrays, mas vamos ver algumas coisas importantes:

//Push para add no final e length para retornar o tamanho

let array = [1,2,3,4,5,6,7]
console.log(array);

//Ao usar delete a posição que o item estava fica vazia
delete array[0]
console.log(array);

array[0] =1

//Mas ao usar o splice isso não ocorre
array.splice(0,0)
console.log(array);

//Splice também serve para adicionar elementos
array.splice(0,0,0) // A posição que quer colocar/ Se quer excluir =1 ou não =0 o que está naquela posição antes de adicionar/ O que vai adicionar
console.log(array);

//Slice não modifica array original e Splice modifica