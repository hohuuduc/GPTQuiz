import { Schema, model, InferSchemaType, HydratedDocument } from "mongoose";

const clientSchema = new Schema(
  {
    clientId: { type: String, required: true, unique: true },
    clientSecret: { type: String, required: true },
    redirectUris: { type: [String], required: true }
  }
);

export type ClientType = InferSchemaType<typeof clientSchema>;

export type ClientDoc = HydratedDocument<ClientType>;

const Client = model<ClientType>("Client", clientSchema);

export default Client;
