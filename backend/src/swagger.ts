import swaggerJSDoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Polgo API",
      version: "0.1.0",
      description: "API documentation for Polgo backend",
    },
    servers: [{ url: "http://localhost:3000", description: "Local server" }],
  },
  apis: ["./src/routes/*.ts", "./src/models/*.ts", "./src/controllers/*.ts"],
});
