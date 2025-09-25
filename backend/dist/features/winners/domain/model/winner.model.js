"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const winnerSchema = new mongoose_1.Schema({
    nome: { type: String, required: true },
    estado: { type: String, required: true },
    cidade: { type: String, required: true },
    premio: { type: String, required: true },
    data: { type: Date, required: true },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Winner", winnerSchema);
