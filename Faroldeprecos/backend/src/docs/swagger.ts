import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Farol de Preços",
      version: "1.0.0",
      description: "Documentação da API do projeto Farol de Preços",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor Local",
      },
    ],
  },
  
  apis: ["./src/auth/*.ts", "./src/mercados/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export function configurarSwagger(app: Express) {
  
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📄 Documentação Swagger disponível em: http://localhost:3000/api-docs");
}