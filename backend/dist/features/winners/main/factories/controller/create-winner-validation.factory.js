"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddDreamValidation = void 0;
const yup = __importStar(require("yup"));
const required_field_yup_validation_1 = require("../../../../../config/validation/required-field-yup-validation");
const makeAddDreamValidation = () => {
    const iso8601Regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/;
    const schema = yup.object().shape({
        nome: yup.string().required(),
        estado: yup
            .string()
            .required()
            .matches(/^[A-Z]{2}$/, "O estado deve ser a sigla, ex: 'RJ', 'SP'"),
        cidade: yup.string().required(),
        premio: yup.string().required(),
        data: yup
            .string()
            .required("A data é obrigatória")
            .matches(iso8601Regex, "A data deve estar em formato ISO 8601 (ex: 2026-09-25T16:15:00Z)")
            .test("is-valid-date", "Data inválida", (value) => value ? !isNaN(Date.parse(value)) : false),
    });
    return new required_field_yup_validation_1.RequiredFieldYupValidation(schema);
};
exports.makeAddDreamValidation = makeAddDreamValidation;
