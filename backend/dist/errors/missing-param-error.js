"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingParamError = void 0;
const response_error_1 = require("./abstract/response-error");
class MissingParamError extends response_error_1.ResponseError {
    constructor(paramName) {
        super(`Missing param: ${paramName}`);
        this.name = "MissingParamError";
    }
}
exports.MissingParamError = MissingParamError;
