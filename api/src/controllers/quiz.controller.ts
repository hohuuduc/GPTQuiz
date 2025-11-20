import { Request, Response } from 'express';
import Quiz, { IQuiz } from '../models/quiz.model';

export const createQuiz = async (req: Request, res: Response) => {
  try {
    const quiz: IQuiz = new Quiz(req.body);
    await quiz.save();
    const url = `${process.env.WEB_HOST}/quiz?${quiz.uuid}`;
    res.status(201).json({ url });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getQuiz = async (req: Request, res: Response) => {
  try {
    const quiz = await Quiz.findOne({ uuid: req.query.uuid });
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const updateQuiz = async (req: Request, res: Response) => {
  try {
    const quiz = await Quiz.findOneAndUpdate({ uuid: req.query.uuid }, req.body, { new: true });
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    const quiz = await Quiz.findOneAndDelete({ uuid: req.query.uuid });
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
