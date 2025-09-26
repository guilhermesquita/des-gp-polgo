"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const bad_request_error_1 = require("../errors/bad-request-error");
const not_found_error_1 = require("../errors/not-found-error");
function errorHandler(err, _req, res, _next) {
    if (err instanceof not_found_error_1.NotFoundError) {
        return res.status(404).json({ sucess: false, message: err.message });
    }
    if (err instanceof bad_request_error_1.BadRequestError) {
        return res.status(400).json({ sucess: false, message: err.message });
    }
    console.error("Unhandled error:", err);
    return res
        .status(500)
        .json({ sucess: false, message: "Internal server error" });
}
