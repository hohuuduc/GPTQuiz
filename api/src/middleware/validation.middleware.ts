import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateQuiz = [
  body('content').isString().notEmpty(),
  body('answers').isArray({ min: 2 }),
  body('answers.*').isString().notEmpty(),
  body('correctAnswer').isInt({ min: 0 }),
  body('score').isInt({ min: 1 }),
  body('duration').isInt({ min: 1 }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
