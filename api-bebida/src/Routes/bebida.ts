import { Router } from 'express';
import BebidaController from '../Controllers/BebidaController';

let router: Router = Router();
let bebidaController: BebidaController = new BebidaController();

router.get('/bebidas', bebidaController.recuperarTodos);
router.post('/bebidas', bebidaController.salvar);
router.get('/bebidas/:id', bebidaController.recuperarUm);
router.delete('/bebidas/:id', bebidaController.apagar);
router.put('/bebidas/:id', bebidaController.editar);

export default router;