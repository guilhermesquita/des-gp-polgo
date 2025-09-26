export abstract class ResponseError extends Error {}

export class BadRequestError extends ResponseError {
  constructor(message: string) {
    super(message);
    this.name = "BadRequestError";
  }
}
