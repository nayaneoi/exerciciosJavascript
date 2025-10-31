const leia = require('readline-sync');

let a, b, c, soma;

console.log("Digite o número A: ");
a = leia.questionInt();

console.log("Digite o número B: ");
b = leia.questionInt();

console.log("Digite o número C: ");
c = leia.questionInt();

soma = a+b

if(soma > c){
    console.log("A Soma de A + B é Maior do que C");
}else if(soma < c){
    console.log("A Soma de A + B é Menor do que C");
}else{
    console.log("A Soma de A + B é Igual a C");
}
