import dotenv from "dotenv";

dotenv.config();

export const configuracao = {
  porta: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "chave_secreta_farol_precos",
  bancoDados: {
    connectionString: process.env.DATABASE_URL
  },
};