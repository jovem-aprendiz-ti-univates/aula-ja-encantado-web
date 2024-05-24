import Bebida from "./src/Models/Bebida";
import BebidaController from "./src/Controllers/BebidaController";

import promptSync from "prompt-sync";
const prompt = promptSync();

let copa: BebidaController = new BebidaController();
let opcao: number = 0;

while (opcao != 9) {
    console.log(`## Menu ##
[1] Salvar bebida
[2] Listar bebidas
[3] Recuperar um
[4] Excluir
[9] Sair
## Menu ##`);
    opcao = Number(prompt("Digite a opção escolhida: "));

    if (opcao === 1){
        console.clear();
        let b1: Bebida = new Bebida();
        b1.cor = prompt("Digite a cor da bebida: ");
        b1.nome = prompt("Digite o nome da bebida: ");
        b1.quantidade = Number(prompt("Digite a quantidade da bebida em litros: "));
        b1.temperatura = prompt("Digite a temperatura da bebida em °C: ");
        b1.teorAlcool = Number(prompt("Digite o teor de álcool da bebida: "));
    
        copa.salvar(b1);
    } else if (opcao === 2) {
        console.clear();
        console.log("## Imprimindo bebidas ##");
        copa.imprimeTodos();
        console.log("## Impressão finalizada ##");
    } else if (opcao === 3){
        const id = Number(prompt("Digite um ID: "));
        const bebida: Bebida | undefined = copa.recuperarUm(id);
        if(bebida){
            bebida.imprimeAtributos();
        } else {
            console.log("Bebida não encontrada");
        }
    } else if (opcao === 4){
        const id = Number(prompt("Digite um ID para excluir: "));
        const bebida: Bebida | undefined = copa.recuperarUm(id);
        if(bebida){
            // copa.excluir(bebida);
        } else {
            console.log("Bebida não encontrada");
        }
    }
}

