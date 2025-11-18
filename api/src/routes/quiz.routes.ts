import { Router } from 'express';
import { createQuiz, getQuiz, updateQuiz, deleteQuiz } from '../controllers/quiz.controller';
import { authenticateJwt } from '../middleware/auth.middleware';
import { validateQuiz } from '../middleware/validation.middleware';

const router = Router();

router.post('/quiz', authenticateJwt, validateQuiz, createQuiz);
router.get('/quiz', getQuiz);
router.put('/quiz', authenticateJwt, updateQuiz);
router.delete('/quiz', authenticateJwt, deleteQuiz);

export default router;
