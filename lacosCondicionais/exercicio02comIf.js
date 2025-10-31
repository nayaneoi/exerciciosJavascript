const leia = require('readline-sync');

let numero;

// Este eu tive ajuda (Lembrete para mim: Revisar os detalhes aprendidos deste exercicio)
console.log("Digite um número: ");
numero = leia.questionInt();

// Qualquer número par dividido por 2 é 0.
// Testamos o resto da divisão para definir se é impar.

if(numero >= 0){
    if(numero%2 == 0){ 
        console.log("O Número %i é par e positivo", numero);
    }else{
        console.log("O Número %i é impar e positivo", numero);
    }
}else{
    if(numero%2 == 0){
        console.log("O Número %i é par e negativo", numero);
    }else{
        console.log("O Número %i é impar e negativo", numero);
    }
}
