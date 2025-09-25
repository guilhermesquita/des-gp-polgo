import "dotenv/config";
import { connectDB } from "../db";
import Winner from "../features/winners/domain/model/winner.model";
import morgan from "morgan";

const sampleWinners = [
  {
    nome: "João Silva",
    estado: "SP",
    cidade: "São Paulo",
    premio: "Carro",
    data: new Date("2025-09-01"),
  },
  {
    nome: "Maria Souza",
    estado: "RJ",
    cidade: "Rio de Janeiro",
    premio: "Viagem",
    data: new Date("2025-08-15"),
  },
];

export async function seedWinners() {
  await connectDB();
  try {
    await Winner.deleteMany({});
    const created = await Winner.insertMany(sampleWinners);
    console.log("Seeded winners:", created.length);
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}
