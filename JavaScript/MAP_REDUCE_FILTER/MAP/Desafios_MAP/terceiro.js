/*
Dado um array de objetos representando produtos em uma loja online, onde cada objeto tem propriedades como nome, preço e quantidade,
utilize map para criar um novo array onde cada objeto contenha uma propriedade total, representando o preço total do produto
(preço * quantidade).
*/

const produtos = [
    { nome: "Camiseta", preco: 29.99, quantidade: 50 },
    { nome: "Calça Jeans", preco: 59.99, quantidade: 30 },
    { nome: "Tênis", preco: 79.99, quantidade: 20 },
    { nome: "Óculos de Sol", preco: 39.99, quantidade: 15 },
    { nome: "Bolsa", preco: 49.99, quantidade: 25 },
    { nome: "Relógio", preco: 99.99, quantidade: 10 },
    { nome: "Jaqueta", preco: 89.99, quantidade: 20 },
    { nome: "Shorts", preco: 34.99, quantidade: 35 },
    { nome: "Boné", preco: 19.99, quantidade: 40 },
    { nome: "Meia", preco: 9.99, quantidade: 50 }
  ];

const total = (product)=>{
    let total = Math.ceil(product.preco * product.quantidade)
    return {nome:product.nome, preco: product.preco, quantidade: product.quantidade, total: total}
}

const produtos_total = produtos.map(total)

console.log(produtos_total);