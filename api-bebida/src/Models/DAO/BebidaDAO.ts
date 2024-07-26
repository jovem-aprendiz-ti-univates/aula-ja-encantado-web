import Bebida from '../Bebida';
import pool from '../../db';

export default class BebidaDAO {

    public async salvar(b: Bebida): Promise<Bebida> {
        try {
            const query: string = `INSERT INTO bebidas (cor, nome, quantidade, temperatura, teor_alcool) VALUES ($1, $2, $3, $4, $5) RETURNING id`;
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

    public async recuperarUm(id: number): Promise<Bebida | undefined> {
        try {
            const query = `SELECT * FROM bebidas WHERE id = $1`;
            const values = [id];
            const result = await pool.query(query, values);

            if (result.rows.length > 0) {
                const bebida = new Bebida();
                bebida.id = result.rows[0].id;
                bebida.cor = result.rows[0].cor;
                bebida.nome = result.rows[0].nome;
                bebida.quantidade = result.rows[0].quantidade;
                bebida.temperatura = result.rows[0].temperatura;
                bebida.teorAlcool = result.rows[0].teor_alcool;
                return bebida;
            } else {
                return undefined;
            }
        } catch (error) {
            console.error(`Erro ao tentar consultar bebida ${id}:`, error);
            throw new Error('Operação de consulta falhou.');
        }
    }

    public async excluir(b: Bebida): Promise<boolean> {
        try {
            const query = `DELETE FROM bebidas WHERE id = $1`;
            const values = [b.id];
            const result = await pool.query(query, values);
            if (result.rowCount) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error(`Erro ao tentar remover bebida ${b.id}:`, error);
            throw new Error('Operação de remoção falhou.');
        }
    }

    public async editar(b: Bebida): Promise<boolean> {
        try {
            const query = `UPDATE bebidas SET cor = $2, temperatura = $3, quantidade = $4, teor_alcool = $5, nome = $6 WHERE id = $1`;
            const values = [b.id, b.cor, b.temperatura, b.quantidade, b.teorAlcool, b.nome];
            const result = await pool.query(query, values);
            if (result.rowCount) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error(`Erro ao tentar atualizar bebida ${b.id}:`, error);
            throw new Error('Operação de edição falhou.');
        }
    }
}