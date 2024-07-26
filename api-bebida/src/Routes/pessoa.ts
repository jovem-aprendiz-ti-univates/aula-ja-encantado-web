import { Router } from 'express';
import PessoaController from '../Controllers/PessoaController';

let router: Router = Router();
let pessoaController: PessoaController = new PessoaController();

router.get('/pessoas', pessoaController.recuperarTodos);
router.post('/pessoas', pessoaController.salvar);
router.get('/pessoas/:id', pessoaController.recuperarUm);
router.delete('/pessoas/:id', pessoaController.apagar);
router.put('/pessoas/:id', pessoaController.editar);

export default router;