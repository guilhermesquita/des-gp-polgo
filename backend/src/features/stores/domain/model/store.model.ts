import { Schema, model, Document } from "mongoose";

export interface IStore extends Document {
  nome: string;
  cnpj: string;
  estado: string;
  cidade: string;
  endereco: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const storeSchema = new Schema<IStore>(
  {
    nome: { type: String, required: true },
    cnpj: { type: String, required: true, unique: true },
    estado: { type: String, required: true },
    cidade: { type: String, required: true },
    endereco: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<IStore>("Store", storeSchema);
