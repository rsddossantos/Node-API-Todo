import { Router } from 'express';
import { privateRoute } from '../config/passport';
import * as TodoController from '../controllers/todo.controller';

const router = Router();

router.post('/login', TodoController.login);
router.get('/todo', privateRoute, TodoController.all);
router.post('/todo', privateRoute, TodoController.add);
router.put('/todo/:id', privateRoute, TodoController.update);
router.delete('/todo/:id', privateRoute, TodoController.remove);

export default router;