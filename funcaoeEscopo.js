//1º
function soma (a, b){
    return a + b;
}
//2º
function ehPar(num){
    return num % 2 == 0 ? true : false;
}
//3º
function dobraValores(array){
    let novoArray = array.map((num) =>{return num * 2;})
    return novoArray;
}
//4º
function contaCaracteres(string){
    let contador = 0;
    for(let i = 0; i < string.length; i++){
        contador ++;
    }
    return contador;
}
//5º
function fatorial(num){
    let total = 0;
    for(let i = 0; i < num; i++){
        total = i * num;
    }
    return total;
}
