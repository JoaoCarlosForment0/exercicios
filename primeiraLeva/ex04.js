let arrayPessoas =  [{ nome: "Alice", idade: 25 }, { nome: "Bob", idade: 30 }, { nome: "Charlie", idade: 35 }];

let arrayNomePessoas = arrayPessoas.map(pessoa => pessoa.nome)

console.log(arrayNomePessoas)