import { Schema, model, Document } from "mongoose";

export interface IWinner extends Document {
  nome: string;
  estado: string;
  cidade: string;
  premio: string;
  data: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const winnerSchema = new Schema<IWinner>(
  {
    nome: { type: String, required: true },
    estado: { type: String, required: true },
    cidade: { type: String, required: true },
    premio: { type: String, required: true },
    data: { type: Date, required: true },
  },
  { timestamps: true }
);

export default model<IWinner>("Winner", winnerSchema);
