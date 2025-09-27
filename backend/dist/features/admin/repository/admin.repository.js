"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRepository = void 0;
const admin_model_1 = __importDefault(require("../domain/model/admin.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "secret";
class AdminRepository {
    async create(params) {
        const exists = await admin_model_1.default.findOne({ email: params.email });
        if (exists)
            return { sucess: false, message: "Email already registered" };
        await admin_model_1.default.create({ email: params.email, password: params.password });
        return { sucess: true, message: "Admin created" };
    }
    async authenticate(params) {
        const admin = (await admin_model_1.default.findOne({
            email: params.email,
        }));
        if (!admin)
            return { sucess: false, message: "Invalid credentials" };
        const match = await admin.comparePassword(params.password);
        if (!match)
            return { sucess: false, message: "Invalid credentials" };
        const token = jsonwebtoken_1.default.sign({ id: admin._id, email: admin.email }, JWT_SECRET, {
            expiresIn: "7d",
        });
        return { sucess: true, token };
    }
}
exports.AdminRepository = AdminRepository;
