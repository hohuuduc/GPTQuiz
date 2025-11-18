import { Router } from 'express';
import { createResult, getResult, updateResult, deleteResult } from '../controllers/result.controller';
import { authenticateJwt } from '../middleware/auth.middleware';

const router = Router();

router.post('/result', authenticateJwt, createResult);
router.get('/result/:id', authenticateJwt, getResult);
router.put('/result/:id', authenticateJwt, updateResult);
router.delete('/result/:id', authenticateJwt, deleteResult);

export default router;
