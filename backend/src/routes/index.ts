import { Router } from 'express';
import contactRouter from './contact';
import pagesRouter from './pages';

const router = Router();

router.use('/contact', contactRouter);
router.use('/pages', pagesRouter);

export default router;