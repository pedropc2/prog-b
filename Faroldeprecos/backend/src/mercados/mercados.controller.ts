import { Request, Response, NextFunction } from "express";
import * as mercadosService from "./mercados.service";

export async function criar(req: Request, res: Response, next: NextFunction) {
  try {
    const { nome, endereco } = req.body;
    const novoMercado = await mercadosService.criar(nome, endereco);
    return res.status(201).json(novoMercado); 
  } catch (erro) {
    next(erro);
  }
}

export async function listarTodos(req: Request, res: Response, next: NextFunction) {
  try {
    const mercados = await mercadosService.listarTodos();
    return res.status(200).json(mercados);
  } catch (erro) {
    next(erro);
  }
}

export async function buscarPorId(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const mercado = await mercadosService.buscarPorId(Number(id));
    return res.status(200).json(mercado);
  } catch (erro) {
    next(erro);
  }
}

export async function atualizar(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { nome, endereco } = req.body;
    const mercadoAtualizado = await mercadosService.atualizar(Number(id), nome, endereco);
    return res.status(200).json(mercadoAtualizado);
  } catch (erro) {
    next(erro);
  }
}

export async function deletar(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    await mercadosService.deletar(Number(id));
    return res.status(204).send(); 
  } catch (erro) {
    next(erro);
  }
}