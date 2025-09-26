"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = exports.ResponseError = void 0;
class ResponseError extends Error {
}
exports.ResponseError = ResponseError;
class BadRequestError extends ResponseError {
    constructor(message) {
        super(message);
        this.name = "BadRequestError";
    }
}
exports.BadRequestError = BadRequestError;
