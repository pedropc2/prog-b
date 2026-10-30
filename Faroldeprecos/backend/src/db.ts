import { Pool } from "pg";
import { configuracao } from "./config";

export const pool = new Pool({
  connectionString: configuracao.bancoDados.connectionString,
});

pool.on("connect", () => {
  console.log("Conexão estabelecida com o banco de dados PostgreSQL.");
});

pool.on("error", (erro) => {
  console.error("Erro inesperado no cliente do PostgreSQL:", erro);
});