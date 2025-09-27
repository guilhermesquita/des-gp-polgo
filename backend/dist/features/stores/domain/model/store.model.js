"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const storeSchema = new mongoose_1.Schema({
    nome: { type: String, required: true },
    cnpj: { type: String, required: true, unique: true },
    estado: { type: String, required: true },
    cidade: { type: String, required: true },
    endereco: { type: String, required: true },
    location: {
        lat: { type: Number },
        lng: { type: Number },
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Store", storeSchema);
