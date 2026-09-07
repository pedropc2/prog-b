import * as precosRepository from "./precos.repository";

export async function listAll() {
  return precosRepository.findAll();
}