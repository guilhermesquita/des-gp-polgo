"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
async function connectDB(uri) {
    const MONGODB_URI = uri || process.env.MONGODB_URI;
    // || "mongodb://localhost:27017/polgo_dev";
    try {
        await mongoose_1.default.connect(MONGODB_URI);
        console.log("MongoDB connected");
    }
    catch (err) {
        console.error("MongoDB connection error:", err);
        throw err;
    }
}
