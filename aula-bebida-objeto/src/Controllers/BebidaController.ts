import Bebida from '../Models/Bebida';

export default class BebidaController {

    private _copa: Array<Bebida> = [];
    private _id: number = 1;

    public salvar(b: Bebida): void {
        b.id = this._id;
        this._copa.push(b);
        this._id++;
    }

    public imprimeTodos(): void {
        for (let index = 0; index < this._copa.length; index++) {
            const element = this._copa[index];
            element.imprimeAtributos();
        }
    }

    public recuperarUm(id: number): Bebida | undefined {
        for (let index = 0; index < this._copa.length; index++) {
            const element = this._copa[index];
            if(element.id === id){
                return element;
            }
        }

        return undefined;

        // return this._copa.find(element => element.id === id);
    }
}