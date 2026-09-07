import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import precosRoutes from "./precos/precos.routes";
import { errorHandler } from "./errors/errorHandler";
import { loadConfig } from "./config";

const config = loadConfig();
const app = express();

// Rotas
app.use(precosRoutes);

// Middleware para rota não encontrada (404)
app.use((req: Request, res: Response, next: NextFunction) => {
  const err: any = new Error("A rota solicitada não existe.");
  err.statusCode = 404;
  err.code = "ROUTE_NOT_FOUND";
  next(err);
});

// Tratamento de erros global
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Servidor rodando em http://localhost:${config.port}`);
});