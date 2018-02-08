import { Router } from 'express';
import blogRouter from './blog';

let router = Router();

router.use('/', blogRouter);

export default router;