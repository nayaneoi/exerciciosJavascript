import { Queue } from "./Queue";
import leia = require("readline-sync");

const fila = new Queue<string>();
let numero:number;
let nome:string;


// Trabalho de equipe
    
do{ 
    console.log ("\n**************************************************************************");
    console.log("                                    Menu");
    console.log ("**************************************************************************");
    console.log ("**************************************************************************");
    console.log("                     1 - Adicionar cliente na Fila");
    console.log("                     2 - Listar todos os Clientes");
    console.log("                     3 - Retirar cliente da Fila");
    console.log("                     0 - Sair");
    console.log ("**************************************************************************");
    console.log ("**************************************************************************");
    console.log("\nDigite uma opção: ");
    numero = leia.questionInt()

    console.clear();
    
        switch (numero){
            case 1:
                console.log("Digite o nome: ");
                nome=leia.question();
                fila.enqueue(nome);
                console.clear();
                console.log("Fila: ");
                fila.printQueue();
                console.log("Cliente Adicionado!");
                break;
            case 2:
                if(fila.isEmpty()){
                    console.log("\nA fila está vazia! ");
                }else{
                    console.log("Lista de Clientes na Fila: ");
                    fila.printQueue();
                }                
                break;
            case 3:
                console.log("Fila: ");
                fila.dequeue();
                fila.printQueue();
                break;
            case 0:
                console.log("Programa Finalizado!");
                break;
            default: console.log("Opção Inválida! \nEscolha uma das opções do menu.");    
        }
}while (numero !== 0);
