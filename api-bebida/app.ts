import express, { Express, Request, Response } from 'express';
import BebidaController from './src/Controllers/BebidaController';
import Bebida from './src/Models/Bebida';

const app: Express = express();
const port: number = 3000;
let copa: BebidaController = new BebidaController();

let b1: Bebida = new Bebida();
b1.cor = "Amarela";
b1.nome = "Cerveja";
b1.quantidade = 1;
b1.temperatura = "Gelada";
b1.teorAlcool = 10;
copa.salvar(b1);

let b2: Bebida = new Bebida();
b2.cor = "Preta";
b2.nome = "Coca cola";
b2.quantidade = 1;
b2.temperatura = "Gelada";
b2.teorAlcool = 0;
copa.salvar(b2);

app.get('/bebidas', (req: Request, res: Response): Response => {
  const bebidas = copa.listarTodos();
  return res.status(200).json(bebidas);
});

app.get('/bebidas/:id', (req: Request, res: Response): Response => {
  const id = Number(req.params.id);
  const bebida: Bebida | undefined = copa.recuperarUm(id);
  if (bebida) {
    return res.status(200).json(bebida);
  } else {
    return res.status(404).json({ message: 'Bebida não encontrada' })
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});