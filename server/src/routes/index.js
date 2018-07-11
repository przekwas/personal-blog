import { Router } from 'express';
import blogRouter from './blog';
import authRouter from './auth';
// import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);

// router.use(tokenMiddleware);
// router.use(isLoggedIn);

router.use('/', blogRouter);

export default router;