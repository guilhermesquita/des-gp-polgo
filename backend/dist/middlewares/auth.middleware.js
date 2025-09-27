"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authorization_error_1 = require("../errors/authorization-error");
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"] || req.headers["Authorization"];
        if (!authHeader || typeof authHeader !== "string") {
            throw new authorization_error_1.UnathorizedError("No token provided");
        }
        const parts = authHeader.split(" ");
        if (parts.length !== 2)
            throw new authorization_error_1.UnathorizedError("Token error");
        const [scheme, token] = parts;
        if (!/^Bearer$/i.test(scheme))
            throw new authorization_error_1.UnathorizedError("Token malformatted");
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = decoded;
        return next();
    }
    catch (err) {
        throw new authorization_error_1.UnathorizedError("Invalid Token");
    }
};
exports.authMiddleware = authMiddleware;
