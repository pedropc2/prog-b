import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../db";
import { configuracao } from "../config";
import { AppError } from "../errors/AppError";

export async function login(email: string, senhaNaoCriptografada: string) {
  
  const result = await pool.query(
    "SELECT id, nome, email, senha FROM usuarios WHERE email = $1",
    [email]
  );
  
  const usuario = result.rows[0];

  
  if (!usuario) {
    throw new AppError("Email ou senha incorretos", 401);
  }

  
  const senhaValida = await bcrypt.compare(senhaNaoCriptografada, usuario.senha);

  if (!senhaValida) {
    throw new AppError("Email ou senha incorretos", 401);
  }

  
  const token = jwt.sign(
    { id: usuario.id, email: usuario.email },
    configuracao.jwtSecret,
    { expiresIn: "1d" } 
  );

  
  return {
    usuario: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    },
    token,
  };
}