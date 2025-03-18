//1º
const pessoa = {
    nome: "Pedro",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
        rua: "Rua das palmeiras",
        cidade: "Florianopolis",
        estado: "SC"
    },
    //2º
    apresentacao: function(){
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou um ${this.profissao}`
    }
};  

//3º
console.log(pessoa.endereco.cidade)
//4º
pessoa.profissao = 'Analista de sistemas'
console.log(pessoa.profissao)
//5º
pessoa.telefone = "48 98765-5432";
console.log(pessoa.telefone)