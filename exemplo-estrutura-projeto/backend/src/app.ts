import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import bebidasRouter from './Routes/bebida';
import pessoasRouter from './Routes/pessoa';

const app: Express = express();
const port: number = 3000

app.use(cors());
app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date()}] ${req.ip} ${req.method} ${req.url}`);
  next();
});

app.use(bebidasRouter);
app.use(pessoasRouter);

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
