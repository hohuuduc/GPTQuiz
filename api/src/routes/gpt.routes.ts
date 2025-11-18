import { Router } from 'express';
import { createQuiz } from '../controllers/quiz.controller';
import { authenticateBearer } from '../middleware/bearerAuth.middleware';

const router = Router();

router.post('/gpt/quiz', authenticateBearer, createQuiz);

export default router;
