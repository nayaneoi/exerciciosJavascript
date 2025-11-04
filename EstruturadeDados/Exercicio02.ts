import { Stack } from "./Stack";
import leia = require("readline-sync");

const pilha = new Stack<string>();
let numero:number;
let livro:string;

    
do{ 
    console.log ("\n**************************************************************************");
    console.log("                                    Menu");
    console.log ("**************************************************************************");
    console.log ("**************************************************************************");
    console.log("                     1 - Adicionar um novo livro na pilha");
    console.log("                     2 - Listar todos os livros da Pilha");
    console.log("                     3 - Retirar um livro da pilha");
    console.log("                     0 - Sair");
    console.log ("**************************************************************************");
    console.log ("**************************************************************************");
    console.log("\nEntre com a opção desejada: ");
    numero = leia.questionInt()

    console.clear();
    
        switch (numero){
            case 1:
                console.log("Digite o nome: ");
                livro=leia.question();
                pilha.push(livro);
                console.clear();
                console.log("Pilha: ");
                pilha.printStack();
                console.log("Livro Adicionado!");
                break;
            case 2:
                if(pilha.isEmpty()){
                    console.log("\nA Pilha está vazia! ");
                }else{
                    console.log("Lista de Livros na Pilha: ");
                    pilha.printStack();
                }                
                break;
            case 3:
                console.log("Pilha: ");
                pilha.pop();
                pilha.printStack();
                ("Um Livro foi retirado da pilha!")
                break;
            case 0:
                console.log("Programa Finalizado!");
                break;
            default: console.log("Opção Inválida! \nEscolha uma das opções do menu.");    
        }
}while (numero !== 0);