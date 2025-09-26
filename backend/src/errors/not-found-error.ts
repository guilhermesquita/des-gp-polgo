import { ResponseError } from "./abstract/response-error";

export class NotFoundError extends ResponseError {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}
