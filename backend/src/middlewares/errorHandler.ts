import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { NotFoundError } from "../errors/not-found-error";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof NotFoundError) {
    return res.status(404).json({ sucess: false, message: err.message });
  }

  if (err instanceof BadRequestError) {
    return res.status(400).json({ sucess: false, message: err.message });
  }

  console.error("Unhandled error:", err);
  return res
    .status(500)
    .json({ sucess: false, message: "Internal server error" });
}
