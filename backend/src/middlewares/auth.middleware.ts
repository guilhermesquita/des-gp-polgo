import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UnathorizedError } from "../errors/authorization-error";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader =
      req.headers["authorization"] || req.headers["Authorization"];
    if (!authHeader || typeof authHeader !== "string") {
      throw new UnathorizedError("No token provided");
    }

    const parts = authHeader.split(" ");
    if (parts.length !== 2) throw new UnathorizedError("Token error");

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme))
      throw new UnathorizedError("Token malformatted");

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    req.user = decoded;
    return next();
  } catch (err) {
    throw new UnathorizedError("Invalid Token");
  }
};
