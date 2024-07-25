import Bebida from '../Bebida';
import pool from '../../db';

export default class BebidaDAO {

    private _copa: Array<Bebida> = [];

    public async salvar(b: Bebida): Promise<Bebida> {
        try {
            const query = `INSERT INTO bebidas (cor, nome, quantidade, temperatura, teor_alcool) VALUES ($1, $2, $3, $4, $5) RETURNING id`;
            const values = [b.cor, b.nome, b.quantidade, b.temperatura, b.teorAlcool];
            const result = await pool.query(query, values);

            if (result.rows.length > 0) {
                b.id = result.rows[0].id;
                return b;
            } else {
                throw new Error('Falha ao inserir bebida');
            }
        } catch (error) {
            console.error('Erro ao tentar salvar bebida:', error);
            throw new Error('Operação de inserção falhou.');
        }
    }

    public async listarTodos(): Promise<Bebida[]> {
        try {
            const query = `SELECT * FROM bebidas`;
            const result = await pool.query(query);
            const bebidas: Array<Bebida> = [];
            for (let i = 0; i < result.rows.length; i++) {
                const row = result.rows[i];
                const bebida = new Bebida();
                bebida.id = row.id;
                bebida.cor = row.cor;
                bebida.nome = row.nome;
                bebida.quantidade = row.quantidade;
                bebida.temperatura = row.temperatura;
                bebida.teorAlcool = row.teor_alcool;
                bebidas.push(bebida);
            }
            return bebidas;
        } catch (error) {
            console.error('Erro ao tentar consultar bebidas:', error);
            throw new Error('Operação de consulta falhou.');
        }
    }

    public recuperarUm(id: number): Bebida | undefined {
        for (let index = 0; index < this._copa.length; index++) {
            const element = this._copa[index];
            if (element.id === id) {
                return element;
            }
        }

        return undefined;

        // return this._copa.find(element => element.id === id);
    }

    public excluir(b: Bebida): boolean {
        for (let index = 0; index < this._copa.length; index++) {
            const element = this._copa[index];
            if (element.id === b.id) {
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