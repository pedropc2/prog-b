import { pool } from "../db";
import { Categoria } from "./categorias.entity";

export async function listarTodas(): Promise<Categoria[]> {
  const result = await pool.query("SELECT * FROM categorias ORDER BY nome ASC");
  return result.rows;
}

export async function buscarPorId(id: number): Promise<Categoria | null> {
  const result = await pool.query("SELECT * FROM categorias WHERE id = $1", [id]);
  return result.rows[0] || null;
}