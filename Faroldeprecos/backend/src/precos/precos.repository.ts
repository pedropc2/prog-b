import { pool } from "../db";

export async function findAll() {
  const result = await pool.query(`
    SELECT
      p.id,
      p.preco,
      p.data,
      p.promocao,
      p.motivo_promocao,
      p.observacao,
      pr.nome AS produto_nome,
      m.nome AS mercado_nome,
      u.nome AS usuario_nome
    FROM precos p
    JOIN produtos pr ON p.produto_id = pr.id
    JOIN mercados m ON p.mercado_id = m.id
    JOIN usuarios u ON p.usuario_id = u.id
    ORDER BY p.data DESC
  `);
  return result.rows;
}