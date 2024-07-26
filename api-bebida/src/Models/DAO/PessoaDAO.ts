import Pessoa from '../Pessoa';

export default class PessoaDAO {

    private _pessoas: Array<Pessoa> = [];
    private _id: number = 1;

    public salvar(p: Pessoa): void {
        p.id = this._id;
        this._pessoas.push(p);
        this._id++;
    }

    public listarTodos(): Array<Pessoa> {
        return this._pessoas;
    }

    public recuperarUm(id: number): Pessoa | undefined {
        for (let index = 0; index < this._pessoas.length; index++) {
            const element = this._pessoas[index];
            if(element.id === id){
                return element;
            }
        }

        return undefined;

        // return this._pessoas.find(element => element.id === id);
    }

    public excluir(p: Pessoa): boolean {
        for (let index = 0; index < this._pessoas.length; index++) {
            const element = this._pessoas[index];
            if(element.id === p.id){
                this._pessoas.splice(index, 1);
                return true;
            }
        }

        return false;
    }

    public editar(p: Pessoa, novaP: Pessoa): void {
        p.nome = novaP.nome;
        p.dataNascimento = novaP.dataNascimento;
        p.altura = novaP.altura;
        p.peso = novaP.peso;
    }
}