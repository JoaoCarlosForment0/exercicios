//1º
let texto = "Aprendendo JavaScript é divertido e recompensador!";
//2º
texto = texto.toUpperCase();
console.log(texto)
//3º
texto = texto.toLowerCase()
console.log(texto.includes('divertido'))
//4º
let palavras = texto.split(' ');
console.log(palavras)
//5º
let palavrasJuntas = ''
palavras.forEach((palavra) =>{palavrasJuntas += `${palavra}-`})
console.log(palavrasJuntas)