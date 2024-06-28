import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response): Response => {
  return res.send('Olá mundo!');
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});