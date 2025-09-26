"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredFieldYupValidation = void 0;
const missing_param_error_1 = require("../../errors/missing-param-error");
class RequiredFieldYupValidation {
    constructor(objectSchema) {
        this.objectSchema = objectSchema;
    }
    validate(input) {
        try {
            this.objectSchema.validateSync(input, {
                abortEarly: false,
            });
        }
        catch (errors) {
            const e = errors;
            return new missing_param_error_1.MissingParamError(e.errors.join(", "));
        }
    }
}
exports.RequiredFieldYupValidation = RequiredFieldYupValidation;
