//1º
const proxAniversario = new Date(2026, 4, 18)
//2º
const hoje = new Date();
//3º
console.log(((proxAniversario - hoje) / 86400000).toFixed())//86.400.000 é milisegundos por dia
//4º
console.log(`${hoje.getFullYear()}-${hoje.getMonth()}-${hoje.getDate()}`)
//5º
hoje.setDate(hoje.getDate() + 30);
console.log(hoje.getDate())
