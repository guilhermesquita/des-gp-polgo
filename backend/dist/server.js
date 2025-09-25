"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db");
// import { runSeeds } from "./seeds/runSeeds";
const PORT = process.env.PORT || 3000;
async function start() {
    await (0, db_1.connectDB)();
    // runSeeds();
    app_1.default.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
start().catch((err) => {
    console.error("Startup error:", err);
    process.exit(1);
});
