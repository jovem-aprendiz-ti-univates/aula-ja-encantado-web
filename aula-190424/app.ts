import Mochila from "./src/Models/Mochila";
import MochilaController from "./src/Controllers/MochilaController";

import promptSync from "prompt-sync";
const prompt = promptSync();

let mochilaController: MochilaController = new MochilaController();

for (let index = 0; index < 3; index++) {
    let backpack: Mochila = new Mochila();
    backpack.tamanho = prompt("Digite o tamanho da mochila: ");
    backpack.cor = prompt("Digite a cor da mochila: ");
    backpack.valor = Number(prompt("Digite o valor da mochila: "));
    mochilaController.salvar(backpack);
}

mochilaController.recuperarTodos();

