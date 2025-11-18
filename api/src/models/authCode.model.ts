import { Schema, model, Document } from 'mongoose';

export interface IAuthCode extends Document {
  code: string;
  clientId: string;
  redirectUri: string;
  userId: string;
}

const authCodeSchema = new Schema<IAuthCode>({
  code: { type: String, required: true, unique: true },
  clientId: { type: String, required: true },
  redirectUri: { type: String, required: true },
  userId: { type: String, required: true },
});

export default model<IAuthCode>('AuthCode', authCodeSchema);
