import cors from 'cors';
import BebidaController from './Controllers/BebidaController';
import Bebida from './Models/Bebida';

const app: Express = express();
const port: number = 3000;
let copa: BebidaController = new BebidaController();

app.use(cors());
app.use(express.json());

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
    return res.status(404).json({ message: 'Bebida não encontrada' });
  }
});

app.delete('/bebidas/:id', (req: Request, res: Response): Response => {
  const id = Number(req.params.id);
  const bebida: Bebida | undefined = copa.recuperarUm(id);
  if (bebida) {
    copa.excluir(bebida);
    return res.status(200).json({ message: `Bebida de ID ${id} removida` });
  } else {
    return res.status(404).json({ message: 'Bebida não encontrada' });
  }
});

app.post('/bebidas', (req: Request, res: Response): Response => {
  const bebida: Bebida = new Bebida();
  bebida.cor = req.body.cor;
  bebida.nome = req.body.nome;
  bebida.quantidade = req.body.quantidade;
  bebida.teorAlcool = req.body.teorAlcool;
  bebida.temperatura = req.body.temperatura;
  copa.salvar(bebida);
  return res.status(200).json(bebida);
});

app.put('/bebidas/:id', (req: Request, res: Response): Response => {
  const id = Number(req.params.id);
  const bebida: Bebida | undefined = copa.recuperarUm(id);
  if (bebida) {
    const novaBebida: Bebida = new Bebida();
    novaBebida.id = bebida.id;
    novaBebida.cor = req.body.cor;
    novaBebida.nome = req.body.nome;
    novaBebida.quantidade = req.body.quantidade;
    novaBebida.teorAlcool = req.body.teorAlcool;
    novaBebida.temperatura = req.body.temperatura;
    copa.editar(bebida, novaBebida);
    return res.status(200).json(novaBebida);
  } else {
    return res.status(404).json({ message: 'Bebida não encontrada' });
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});