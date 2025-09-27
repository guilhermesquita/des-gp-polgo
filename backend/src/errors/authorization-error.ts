import { ResponseError } from "./abstract/response-error";

export class UnathorizedError extends ResponseError {
  constructor(message: string) {
    super(message);
    this.name = "UnathorizedError";
  }
}
