"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnathorizedError = void 0;
const response_error_1 = require("./abstract/response-error");
class UnathorizedError extends response_error_1.ResponseError {
    constructor(message) {
        super(message);
        this.name = "UnathorizedError";
    }
}
exports.UnathorizedError = UnathorizedError;
