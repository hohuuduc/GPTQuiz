import { Schema, model, Document } from 'mongoose';
const { v4: uuidv4 } = require('uuid');

export interface IQuiz extends Document {
  content: string;
  answers: string[];
  correctAnswer: number;
  score: number;
  duration: number;
  uuid: string;
}

const quizSchema = new Schema<IQuiz>({
  content: { type: String, required: true },
  answers: { type: [String], required: true },
  correctAnswer: { type: Number, required: true },
  score: { type: Number, required: true },
  duration: { type: Number, required: true },
  uuid: { type: String, default: uuidv4, unique: true },
});

export default model<IQuiz>('Quiz', quizSchema);
