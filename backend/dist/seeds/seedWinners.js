"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedWinners = seedWinners;
require("dotenv/config");
const db_1 = require("../db");
const winner_model_1 = __importDefault(require("../features/winners/domain/model/winner.model"));
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
async function seedWinners() {
    await (0, db_1.connectDB)();
    try {
        await winner_model_1.default.deleteMany({});
        const created = await winner_model_1.default.insertMany(sampleWinners);
        console.log("Seeded winners:", created.length);
        process.exit(0);
    }
    catch (err) {
        console.error("Seeding error:", err);
        process.exit(1);
    }
}
