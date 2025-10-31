const leia = require('readline-sync');

let codigo, quantidade;


// para fazer tabela -> console.table(array01)

// console.table(["apples", "oranges", "bananas"]);

console.log("Código do Produto: ");
codigo = leia.questionInt();
console.log("Quantidade: ");
quantidade = leia.questionFloat();

switch (codigo){
    case 1:
        console.log("Cachorro Quente");
        console.log("Valor total: ", (quantidade * 10.00).toFixed(2));
        break;
    case 2:
        console.log("Produto: X-Salada");
        console.log("Valor total: ", (quantidade * 15.00).toFixed(2));
        break;
    case 3:
        console.log("Produto: X-Bacon");
        console.log("Valor total: ", (quantidade * 18).toFixed(2));
        break;
    case 4:
        console.log("Produto: Bauru");
        console.log("Valor total: ", (quantidade * 12).toFixed(2));
        break;
    case 5:
        console.log("Produto: Refrigerante");
        console.log("Valor total: ", (quantidade * 8).toFixed(2));
        break;
    case 6:
        console.log("Produto: Suco de laranja");
        console.log("Valor total: ", (quantidade * 13).toFixed(2));
        break;
    default:
        console.log("Opção invalida!");
}