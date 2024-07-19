import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import BebidaController from './Controllers/BebidaController';

const app: Express = express();
const port: number = 3000
let bebidaController: BebidaController = new BebidaController();

app.use(cors());
app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date()}] ${req.ip} ${req.method} ${req.url}`);
  next();
});

app.get('/bebidas', bebidaController.recuperarTodos);
app.post('/bebidas', bebidaController.salvar);
app.get('/bebidas/:id', bebidaController.recuperarUm);
app.delete('/bebidas/:id', bebidaController.apagar);
app.put('/bebidas/:id', bebidaController.editar);

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});