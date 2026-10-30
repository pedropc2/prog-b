import { Request, Response, NextFunction } from "express";
import * as categoriasService from "./categorias.service";

export async function listarTodas(req: Request, res: Response, next: NextFunction) {
  try {
    const categorias = await categoriasService.listarTodas();
    return res.status(200).json(categorias);
  } catch (erro) {
    next(erro);
  }
}

export async function buscarPorId(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const categoria = await categoriasService.buscarPorId(Number(id));
    
    return res.status(200).json(categoria);
  } catch (erro) {
    next(erro);
  }
}