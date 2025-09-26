import { ResponseError } from "./abstract/response-error";

export class MissingParamError extends ResponseError {
  constructor(paramName: string) {
    super(`Missing param: ${paramName}`);
    this.name = "MissingParamError";
  }
}
