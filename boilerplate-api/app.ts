import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();
const port: number = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response): Response => {
  return res.status(200).json({ message: 'Olá mundo!' });
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});