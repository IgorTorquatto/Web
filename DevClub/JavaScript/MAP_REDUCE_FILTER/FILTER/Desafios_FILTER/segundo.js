//Criar novo array com empresas fundadas a partir de 1980 e com mais de 10 de valor de mercado
const empresas = [
    { name: "Apple Inc.", marketvalue: 23, CEO: "Tim Cook", foundedOn:  1976 },
    { name: "Amazon.com Inc.", marketvalue: 16, CEO: "Jeff Bezos", foundedOn: 1994 },
    { name: "Microsoft Corporation", marketvalue: 18, CEO: "Satya Nadella", foundedOn: 1975 },
    { name: "Alphabet Inc. (Google)", marketvalue: 17, CEO: "Sundar Pichai", foundedOn: 1998 },
    { name: "Meta Platforms, Inc. (Facebook)", marketvalue: 10, CEO: "Mark Zuckerberg", foundedOn: 2004 },
    { name: "Tesla, Inc.", marketvalue: 10, CEO: "Elon Musk", foundedOn: 2003 },
    { name: "Tencent Holdings Limited", marketvalue: 7, CEO: "Pony Ma", foundedOn: 1998 },
    { name: "Samsung Electronics Co., Ltd.", marketvalue: 45, CEO: "Kim Ki-nam", foundedOn:  1969 },
    { name: "Walmart Inc.", marketvalue: 4, CEO: "Doug McMillon", foundedOn: 1962 },
    { name: "Berkshire Hathaway Inc.", marketvalue: 6, CEO: "Warren Buffett", foundedOn: 1839  }
  ];


const filter_by_foundation = company =>  company.foundedOn >=1980

const filter_by_marketValue = company => company.marketvalue >= 10

const filtered_companies = empresas.filter(filter_by_foundation).filter(filter_by_marketValue)

console.log(filtered_companies);