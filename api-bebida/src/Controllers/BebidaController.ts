import { Request, Response } from 'express';
import BebidaDAO from '../Models/DAO/BebidaDAO';
import Bebida from '../Models/Bebida';

export default class BebidaController {
    private _copa: BebidaDAO = new BebidaDAO();

    salvar = async (req: Request, res: Response): Promise<Response> => {
        try {
            const bebida: Bebida = new Bebida();
            bebida.cor = req.body.cor;
            bebida.nome = req.body.nome;
            bebida.quantidade = req.body.quantidade;
            bebida.teorAlcool = req.body.teorAlcool;
            bebida.temperatura = req.body.temperatura;
            const resultado = await this._copa.salvar(bebida);
            return res.status(200).json(resultado);
        } catch (err) {
            console.error('Erro ao tentar salvar bebida:', err);
            return res.status(500).send({ error: 'Falha ao tentar salvar bebida.' });
        }
    };

    recuperarTodos = async (req: Request, res: Response): Promise<Response> => {
        try {
            const bebidas = await this._copa.listarTodos();
            return res.status(200).json(bebidas);
        } catch (err) {
            console.error('Erro ao tentar consultar bebidas:', err);
            return res.status(500).send({ error: 'Falha ao tentar consultar bebidas.' });
        }
    };

    recuperarUm = async (req: Request, res: Response): Promise<Response> => {
        try {
            const id = Number(req.params.id);
            const bebida: Bebida | undefined = await this._copa.recuperarUm(id);
            if (bebida) {
                return res.status(200).json(bebida);
            } else {
                return res.status(404).json({ message: 'Bebida não encontrada' });
            }
        } catch (err) {
            console.error(`Erro ao tentar consultar bebida ${req.params.id}:`, err);
            return res.status(500).send({ error: `Falha ao tentar consultar bebida.` });
        }
    };

    apagar = async (req: Request, res: Response): Promise<Response> => {
        try {
            const id = Number(req.params.id);
            const bebida: Bebida | undefined = await this._copa.recuperarUm(id);
            if (bebida) {
                const resultado = await this._copa.excluir(bebida);
                if (resultado) {
                    return res.status(200).json({ message: `Bebida de ID ${id} removida` });
                } else {
                    return res.status(500).json({ erro: `Bebida de ID ${id} não removida, ocorreu um erro` });
                }
            } else {
                return res.status(404).json({ message: 'Bebida não encontrada' });
            }
        } catch (err) {
            console.error(`Erro ao tentar apagar bebida ${req.params.id}:`, err);
            return res.status(500).send({ error: `Falha ao tentar apagar bebida.` });
        }
    };

    editar = async (req: Request, res: Response): Promise<Response> => {
        const id = Number(req.params.id);
        const bebida: Bebida | undefined = await this._copa.recuperarUm(id);
        if (bebida) {
            bebida.cor = req.body.cor;
            bebida.nome = req.body.nome;
            bebida.quantidade = req.body.quantidade;
            bebida.teorAlcool = req.body.teorAlcool;
            bebida.temperatura = req.body.temperatura;
            const resultado = await this._copa.editar(bebida);
            if (resultado) {
                return res.status(200).json(bebida);
            } else {
                return res.status(500).json({ erro: `Bebida de ID ${id} não editada, ocorreu um erro` });
            }
        } else {
            return res.status(404).json({ message: 'Bebida não encontrada' });
        }
    };
}