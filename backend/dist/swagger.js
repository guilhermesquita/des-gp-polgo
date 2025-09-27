"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
exports.swaggerSpec = (0, swagger_jsdoc_1.default)({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Polgo API",
            version: "0.1.0",
            description: "API documentation for Grupo Polgo backend",
        },
        servers: [{ url: "http://localhost:3000", description: "Local server" }],
        components: {
            schemas: {
                Winner: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        nome: { type: "string" },
                        estado: { type: "string" },
                        cidade: { type: "string" },
                        premio: { type: "string" },
                        data: { type: "string", format: "date-time" },
                        createdAt: { type: "string", format: "date-time" },
                        updatedAt: { type: "string", format: "date-time" },
                    },
                    required: ["nome", "estado", "cidade", "premio", "data"],
                },
                WinnersPage: {
                    type: "object",
                    properties: {
                        sucess: { type: "boolean" },
                        message: { type: "string" },
                        data: {
                            type: "array",
                            items: { $ref: "#/components/schemas/Winner" },
                        },
                        pagination: {
                            type: "object",
                            properties: {
                                page: { type: "number" },
                                limit: { type: "number" },
                                total: { type: "number" },
                                totalPages: { type: "number" },
                            },
                        },
                    },
                },
            },
        },
    },
    apis: [
        "./src/routes/*.ts",
        "./src/models/*.ts",
        "./src/controllers/*.ts",
        "./src/features/**/*.ts",
    ],
});
