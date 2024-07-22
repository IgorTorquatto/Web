/*
Create an array of objects where each object represents a book with title and author properties.
Use the forEach method to print the title and author of each book to the console.
Add a new book to the array and use the push method.
*/

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { title: "Animal Farm", author: "George Orwell" },
    { title: "Jane Eyre", author: "Charlotte Brontë" }
  ]

console.log("For of")
for( let book of books){
    console.log(`${book.title} ${book.author}`)
}

books.push({title:"The Chronicles of Narnia", author: "C. S. Lewis"})
console.log("\n")

books.forEach((book,index)=>{
    console.log(`Position: ${(index)+1} TITLE: [${book.title}] AUTHOR: [${book.author}]`)
})

