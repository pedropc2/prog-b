import { pool } from "../db";
import { Mercado } from "./mercados.entity";

// Criar
export async function criar(nome: string, endereco: string): Promise<Mercado> {
  const result = await pool.query(
    "INSERT INTO mercados (nome, endereco) VALUES ($1, $2) RETURNING *",
    [nome, endereco]
  );
  return result.rows[0];
}

// Ler tudo e Ler por ID
export async function listarTodos(): Promise<Mercado[]> {
  const result = await pool.query("SELECT * FROM mercados ORDER BY nome ASC");
  return result.rows;
}

export async function buscarPorId(id: number): Promise<Mercado | null> {
  const result = await pool.query("SELECT * FROM mercados WHERE id = $1", [id]);
  return result.rows[0] || null;
}

// Atualizar
export async function atualizar(id: number, nome: string, endereco: string): Promise<Mercado | null> {
  const result = await pool.query(
    "UPDATE mercados SET nome = $1, endereco = $2 WHERE id = $3 RETURNING *",
    [nome, endereco, id]
  );
  return result.rows[0] || null;
}

// Apagar
export async function deletar(id: number): Promise<boolean> {
  const result = await pool.query("DELETE FROM mercados WHERE id = $1", [id]);
  return result.rowCount !== null && result.rowCount > 0;
}