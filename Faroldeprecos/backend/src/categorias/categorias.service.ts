import * as categoriasRepository from "./categorias.repository";
import { AppError } from "../errors/AppError";

export async function listarTodas() {
  return await categoriasRepository.listarTodas();
}

export async function buscarPorId(id: number) {
  const categoria = await categoriasRepository.buscarPorId(id);
  
  if (!categoria) {
    throw new AppError("Categoria não encontrada.", 404);
  }
  
  return categoria;
}