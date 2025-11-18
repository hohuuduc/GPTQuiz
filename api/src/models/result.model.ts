import { Schema, model, Document } from 'mongoose';

export interface IResult extends Document {
  quizId: Schema.Types.ObjectId;
  answers: (string | number)[];
  score: number;
  timeTaken: number;
}

const resultSchema = new Schema<IResult>({
  quizId: { type: Schema.Types.ObjectId, ref: 'Quiz', required: true },
  answers: { type: [Schema.Types.Mixed], required: true },
  score: { type: Number, required: true },
  timeTaken: { type: Number, required: true },
});

export default model<IResult>('Result', resultSchema);
