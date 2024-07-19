import { Request, Response } from 'express';
import BebidaDAO from '../Models/DAO/BebidaDAO';
import Bebida from '../Models/Bebida';

export default class BebidaController {
    private _copa: BebidaDAO = new BebidaDAO();

    salvar = (req: Request, res: Response): Response => {
        const bebida: Bebida = new Bebida();
        bebida.cor = req.body.cor;
        bebida.nome = req.body.nome;
        bebida.quantidade = req.body.quantidade;
        bebida.teorAlcool = req.body.teorAlcool;
        bebida.temperatura = req.body.temperatura;
        this._copa.salvar(bebida);
        return res.status(200).json(bebida);
    };

    recuperarTodos = (req: Request, res: Response): Response => {
        const bebidas = this._copa.listarTodos();
        return res.status(200).json(bebidas);
    };

    recuperarUm = (req: Request, res: Response): Response => {
        const id = Number(req.params.id);
        const bebida: Bebida | undefined = this._copa.recuperarUm(id);
        if (bebida) {
            return res.status(200).json(bebida);
        } else {
            return res.status(404).json({ message: 'Bebida não encontrada' });
        }
    };

    apagar = (req: Request, res: Response): Response => {
        const id = Number(req.params.id);
        const bebida: Bebida | undefined = this._copa.recuperarUm(id);
        if (bebida) {
            this._copa.excluir(bebida);
            return res.status(200).json({ message: `Bebida de ID ${id} removida` });
        } else {
            return res.status(404).json({ message: 'Bebida não encontrada' });
        }
    };

    editar = (req: Request, res: Response): Response => {
        const id = Number(req.params.id);
        const bebida: Bebida | undefined = this._copa.recuperarUm(id);
        if (bebida) {
            const novaBebida: Bebida = new Bebida();
            novaBebida.id = bebida.id;
            novaBebida.cor = req.body.cor;
            novaBebida.nome = req.body.nome;
            novaBebida.quantidade = req.body.quantidade;
            novaBebida.teorAlcool = req.body.teorAlcool;
            novaBebida.temperatura = req.body.temperatura;
            this._copa.editar(bebida, novaBebida);
            return res.status(200).json(novaBebida);
        } else {
            return res.status(404).json({ message: 'Bebida não encontrada' });
        }
    };
}