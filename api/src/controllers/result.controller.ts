import { Request, Response } from 'express';
import Result, { IResult } from '../models/result.model';

export const createResult = async (req: Request, res: Response) => {
  try {
    const result: IResult = new Result(req.body);
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getResult = async (req: Request, res: Response) => {
  try {
    const result = await Result.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Result not found' });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const updateResult = async (req: Request, res: Response) => {
  try {
    const result = await Result.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!result) {
      return res.status(404).json({ error: 'Result not found' });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteResult = async (req: Request, res: Response) => {
  try {
    const result = await Result.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Result not found' });
    }
    res.status(200).json({ message: 'Result deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
