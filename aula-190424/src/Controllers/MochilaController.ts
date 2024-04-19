import Mochila from "../Models/Mochila";

export default class MochilaController {

    private _mochilas: Array<Mochila> = [];

    public salvar(mochila: Mochila): void {
        this._mochilas.push(mochila);
    }

    public recuperarTodos(): void {
        console.log(this._mochilas);
    }
}