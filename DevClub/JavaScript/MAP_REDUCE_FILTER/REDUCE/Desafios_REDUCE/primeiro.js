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

const value_all_companies = empresas.reduce ( (count,current_value)=>{
    return current_value.marketvalue + count
},0)

console.log(value_all_companies);