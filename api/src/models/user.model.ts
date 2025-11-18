import { Schema, model, InferSchemaType, HydratedDocument } from "mongoose";

const userSchema = new Schema(
  {
    googleId: { type: String, required: true, unique: true },
    displayName: { type: String, required: true }
  }
);

export type UserType = InferSchemaType<typeof userSchema>;

export type UserDoc = HydratedDocument<UserType>;

const User = model<UserType>("User", userSchema);

export default User;
