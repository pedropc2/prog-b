import { pool } from "../db";
import { Preco } from "./precos.entity";

export async function buscarTodos(): Promise<Preco[]> {
  const result = await pool.query(`
    SELECT
      p.id,
      p.produto_id,
      p.mercado_id,
      p.usuario_id,
      p.preco,
      p.data,
      p.promocao,
      p.motivo_promocao,
      p.observacao,
      p.created_at
    FROM precos p
    ORDER BY p.data DESC
  `);

  return result.rows.map(
    (linha: any) =>
      new Preco(
        {
          produtoId: linha.produto_id,
          mercadoId: linha.mercado_id,
          usuarioId: linha.usuario_id,
          preco: Number(linha.preco),
          promocao: linha.promocao,
          motivoPromocao: linha.motivo_promocao,
          observacao: linha.observacao,
          data: new Date(linha.data),
        },
        linha.id,
        new Date(linha.created_at)
      )
  );
}

export async function buscarPorId(id: number): Promise<Preco | null> {
  const result = await pool.query(
    `
    SELECT
      p.id,
      p.produto_id,
      p.mercado_id,
      p.usuario_id,
      p.preco,
      p.data,
      p.promocao,
      p.motivo_promocao,
      p.observacao,
      p.created_at
    FROM precos p
    WHERE p.id = $1
  `,
    [id]
  );

  const linha = result.rows[0];
  if (!linha) return null;

  return new Preco(
    {
      produtoId: linha.produto_id,
      mercadoId: linha.mercado_id,
      usuarioId: linha.usuario_id,
      preco: Number(linha.preco),
      promocao: linha.promocao,
      motivoPromocao: linha.motivo_promocao,
      observacao: linha.observacao,
      data: new Date(linha.data),
    },
    linha.id,
    new Date(linha.created_at)
  );
}

export async function salvar(preco: Preco): Promise<Preco> {
  const query = `
    INSERT INTO precos (produto_id, mercado_id, usuario_id, preco, promocao, motivo_promocao, observacao, data)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING id, created_at;
  `;

  const valores = [
    preco.produtoId,
    preco.mercadoId,
    preco.usuarioId,
    preco.preco,
    preco.promocao,
    preco.motivoPromocao,
    preco.observacao,
    preco.data,
  ];

  const result = await pool.query(query, valores);
  const linha = result.rows[0];

  return new Preco(
    {
      produtoId: preco.produtoId,
      mercadoId: preco.mercadoId,
      usuarioId: preco.usuarioId,
      preco: preco.preco,
      promocao: preco.promocao,
      motivoPromocao: preco.motivoPromocao,
      observacao: preco.observacao,
      data: preco.data,
    },
    linha.id,
    new Date(linha.created_at)
  );
}