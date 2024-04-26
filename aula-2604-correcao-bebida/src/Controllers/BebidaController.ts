import Bebida from '../Models/Bebida';

export default class BebidaController {

    private _copa: Array<Bebida> = [];

    public salvar(b: Bebida): void {
        this._copa.push(b);
    }

    public imprimeTodos(): void {
        // console.log(this._copa);
        for (let index = 0; index < this._copa.length; index++) {
            const element = this._copa[index];
            element.imprimeAtributos();
        }
    }
}