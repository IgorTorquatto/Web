/*
1-  Adicionar 10% de valor de mercado para todas as empresas (Map)
2- Filtrar as empresas fundadas antes de 2000 (Filter)
3- Somar o valor de mercado das empresas filtradas ( Reduce )
*/

const companies = [
    {
        name: "Apple Inc.",
        marketValue: 90,
        CEO: "Tim Cook",
        foundedOn: 1976
    },
    {
        name: "Microsoft Corporation",
        marketValue: 600,
        CEO: "Satya Nadella",
        foundedOn: 1975
    },
    {
        name: "Amazon.com Inc.",
        marketValue: 100,
        CEO: "Andy Jassy",
        foundedOn: 1994
    },
    {
        name: "Alphabet Inc.",
        marketValue: 234,
        CEO: "Sundar Pichai",
        foundedOn: 2015
    },
    {
        name: "Facebook, Inc.",
        marketValue: 240,
        CEO: "Mark Zuckerberg",
        foundedOn: 2004
    },
    {
        name: "Tesla, Inc.",
        marketValue: 300,
        CEO: "Elon Musk",
        foundedOn: 2003
    },
    {
        name: "Nvidia Corporation",
        marketValue: 200,
        CEO: "Jensen Huang",
        foundedOn: 1993
    },
    {
        name: "Intel Corporation",
        marketValue: 900,
        CEO: "Pat Gelsinger",
        foundedOn: 1968
    },
    {
        name: "IBM",
        marketValue: 850,
        CEO: "Arvind Krishna",
        foundedOn: 1911
    },
    {
        name: "Samsung Electronics Co., Ltd.",
        marketValue: 530,
        CEO: "Kim Ki-nam",
        foundedOn: 1969
    }
];

//MAP -> lembrando que map retorna um array com o mesmo número de elementos do array original
const add_market_value = (company)=>{
    let increase = company.marketValue * 0.1
    return {name: company.name, marketValue: (company.marketValue + increase), CEO: company.CEO,foundedOn: company.foundedOn }
}

const array_incremented = companies.map(add_market_value)
//console.log(array_incremented);

//FILTER -> Cria um novo array apenas com os elementos filtrados
const founded_before_2000 = company => company.foundedOn < 2000

const array_filtered = array_incremented.filter(founded_before_2000)
console.log(array_filtered);

//REDUCE -> Somar valor de mercado de todas
const value_market_all = array_filtered.reduce((acc,current)=>{
     return acc + current.foundedOn
},0)

console.log(`The market value of all filtered companies is ${value_market_all}`);