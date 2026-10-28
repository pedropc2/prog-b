import * as precosRepository from "./precos.repository";
import { Preco, PrecoProps } from "./precos.entity";
import { AppError } from "../errors/AppError";

export async function listarTodos(): Promise<Preco[]> {
  return await precosRepository.buscarTodos();
}

export async function obterPorId(id: number): Promise<Preco> {
  const preco = await precosRepository.buscarPorId(id);
  if (!preco) {
    throw new AppError("Preço não encontrado.", 404);
  }
  return preco;
}

export async function criar(propriedades: PrecoProps): Promise<Preco> {
  const novoPreco = new Preco(propriedades);
  return await precosRepository.salvar(novoPreco);
}