import { Request, Response } from 'express';
import PessoaDAO from "../Models/DAO/PessoaDAO";
import Pessoa from '../Models/Pessoa';

export default class PessoaController {

    private _pesssoas: PessoaDAO = new PessoaDAO();
    salvar = (req: Request, res: Response): Response => {
        const pessoa: Pessoa = new Pessoa();
        pessoa.nome = req.body.nome;
        pessoa.dataNascimento = req.body.dataNascimento;
        pessoa.altura = req.body.altura;
        pessoa.peso = req.body.peso;
        this._pesssoas.salvar(pessoa);
        return res.status(200).json(pessoa);
    }

    recuperarUm = (req: Request, res: Response): Response => {
        const id = Number(req.params.id);
        const pessoa: Pessoa | undefined = this._pesssoas.recuperarUm(id);
        if (pessoa) {
            return res.status(200).json(pessoa);
        } else {
            return res.status(404).json({ message: `Pessoa não encontrada.` });
        }
    }

    recuperarTodos = (req: Request, res: Response): Response => {
        const pessoas = this._pesssoas.listarTodos();
        return res.status(200).json(pessoas);
    }

    apagar = (req: Request, res: Response): Response => {
        const id = Number(req.params.id);
        const pessoa: Pessoa | undefined = this._pesssoas.recuperarUm(id);
        if (pessoa) {
            this._pesssoas.excluir(pessoa);
            return res.status(200).json({ message: `Pessoa ${id} excluída com sucesso.` });
        } else {
            return res.status(404).json({ message: `Pessoa ${id} não encontrada.` });
        }
    }

    editar = (req: Request, res: Response): Response => {
        const id = Number(req.params.id);
        const pessoa: Pessoa | undefined = this._pesssoas.recuperarUm(id);
        if (pessoa) {
            const novaPessoa: Pessoa = new Pessoa();
            novaPessoa.id = pessoa.id;
            novaPessoa.nome = req.body.nome;
            novaPessoa.dataNascimento = req.body.dataNascimento;
            novaPessoa.altura = req.body.altura;
            novaPessoa.peso = req.body.peso;
            this._pesssoas.editar(pessoa, novaPessoa);
            return res.status(200).json(novaPessoa);
        } else {
            return res.status(404).json({message: `Pessoa ${id} não encontrada.`});
        }
    }
}