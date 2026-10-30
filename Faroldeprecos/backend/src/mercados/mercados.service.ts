import * as mercadosRepository from "./mercados.repository";
import { AppError } from "../errors/AppError";

// Criar
export async function criar(nome: string, endereco: string) {
  if (!nome || !endereco) {
    throw new AppError("O nome e o endereço são obrigatórios.", 400);
  }
  return await mercadosRepository.criar(nome, endereco);
}

// Ler
export async function listarTodos() {
  return await mercadosRepository.listarTodos();
}

export async function buscarPorId(id: number) {
  const mercado = await mercadosRepository.buscarPorId(id);
  
  if (!mercado) {
    throw new AppError("Mercado não encontrado.", 404);
  }
  
  return mercado;
}

//  Atualizar
export async function atualizar(id: number, nome: string, endereco: string) {
  if (!nome || !endereco) {
    throw new AppError("O nome e o endereço são obrigatórios para atualizar.", 400);
  }
  
  
  await buscarPorId(id);

  return await mercadosRepository.atualizar(id, nome, endereco);
}


export async function deletar(id: number) {
  
  await buscarPorId(id);

  await mercadosRepository.deletar(id);
}