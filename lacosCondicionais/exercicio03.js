const leia = require('readline-sync');

let nome, idade, doacao;


console.log("Digite o Nome do doador: ");
nome = leia.question();
console.log("Digite a Idade do doador: ");
idade = leia.questionInt();
doacao = leia.keyInYNStrict("Primeira doação de sangue?: ");


// A função keyInYNStrict = boolean
// Como estamos utilizando o Operador Lógico && (E lógico ou Conjunção), as 2 condições acima devem ser verdadeiras para que o teste lógico seja Verdadeiro.
// y = sim/true n = não/false

if (idade >= 18 && idade <= 59){
    console.log(nome + " está apto(a) para doar sangue!");
}else if(idade < 18){
        console.log(nome + " não está apto para doar sangue!");
    }else{
    if(idade >= 60 && idade <= 69 && doacao == false){
        console.log(nome + " está apto(a) para doar sangue!");
    }else{
        console.log(nome + " não está apto(a) para doar sangue!");
    }
}






