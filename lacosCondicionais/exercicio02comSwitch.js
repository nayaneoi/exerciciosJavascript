const leia = require('readline-sync');

let numero;

// Este eu fiz sozinha

console.log("Digite um número: ");
numero = leia.questionInt();

switch (numero){
    case 2:
        console.log("O Número 2 é par e positivo!");
        break;
    case -3:
        console.log("O Número -3 é ímpar e negativo!");
        break;
    case -2:
        console.log("O Número -2 é par e negativo!");
        break;
    case 3:
        console.log("O Número 3 é ímpar e positivo!");
        break;
    default:
        console.log("Desculpe, ainda não tenho esta informação");
}

