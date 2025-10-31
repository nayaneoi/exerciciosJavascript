const leia = require('readline-sync');

let nome, codigo, salario;

// Incluir uma tabela

console.log("Nome do colaborador: ");
nome = leia.question();

console.log("Cargo: ");
codigo = leia.questionInt();

console.log("Salário: ");
salario = leia.questionFloat();

console.clear();

switch (codigo){
    case 1:
        console.log("Nome do colaborador: ", nome);
        console.log("Cargo: Gerente");
        console.log("R$ " + (salario * 1.10).toFixed(2));
        break;
    case 2:
        console.log("Nome do colaborador: ", nome);
        console.log("Cargo: Vendedor");
        console.log("R$ " + (salario * 1.07).toFixed(2));
        break;
    case 3:
        console.log("Nome do colaborador: ", nome);
        console.log("Cargo: Supervisor");
        console.log("R$ " + (salario * 1.09).toFixed(2));
        break;
    case 4:
        console.log("Nome do colaborador: ", nome);
        console.log("Cargo: Motorista");
        console.log("R$ " + (salario * 1.06).toFixed(2));
        break;
    case 5:
        console.log("Nome do colaborador: ", nome);
        console.log("Cargo: Estoquista");
        console.log("R$ " + (salario * 1.05).toFixed(2));
        break;
    case 6:
        console.log("Nome do colaborador: ", nome);
        console.log("Cargo: Técnico de TI");
        console.log("R$ " + (salario * 1.08).toFixed(2));
        break;
    default:
        console.log("Código inválido");
}
