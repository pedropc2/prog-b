import { Request, Response, NextFunction } from "express";
import * as authService from "./auth.service";
import { AppError } from "../errors/AppError";

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    // 1. Extrai os dados do corpo da requisição
    const { email, senha } = req.body;

    // 2. Validação simples para garantir que nada chegou vazio
    if (!email || !senha) {
      throw new AppError("O email e a senha são obrigatórios.", 400);
    }

    // 3. Chama a regra de negócio na camada de serviço
    const resultado = await authService.login(email, senha);

    // 4. Devolve o utilizador e o token com sucesso (Status 200 OK)
    return res.status(200).json(resultado);
  } catch (erro) {
    // 5. Se houver algum erro (ex: senha errada), passa para o errorHandler.ts lidar com ele
    next(erro);
  }
}