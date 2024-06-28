import Bebida from '../Models/Bebida';

export default class BebidaController {

    private _copa: Array<Bebida> = [];
    private _id: number = 1;

    public salvar(b: Bebida): void {
        b.id = this._id;
        this._copa.push(b);
        this._id++;
    }

    public listarTodos(): Array<Bebida> {
        return this._copa;
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

    public excluir(b: Bebida): boolean {
        for (let index = 0; index < this._copa.length; index++) {
            const element = this._copa[index];
            if(element.id === b.id){
                this._copa.splice(index, 1);
                return true;
            }
        }

        return false;
    }

    public editar(b: Bebida, novaB: Bebida): void {
        b.cor = novaB.cor;
        b.nome = novaB.nome;
        b.quantidade = novaB.quantidade;
        b.temperatura = novaB.temperatura;
        b.teorAlcool = novaB.teorAlcool;
    }
}