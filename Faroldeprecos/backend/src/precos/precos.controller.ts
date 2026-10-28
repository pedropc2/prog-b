import { Request, Response, NextFunction } from "express";
import * as precosService from "./precos.service";
import { Preco, PrecoProps } from "./precos.entity";
import { AppError } from "../errors/AppError";

export async function obterTodos(req: Request, res: Response, next: NextFunction) {
  try {
    const precos: Preco[] = await precosService.listarTodos();
    res.json(precos);
  } catch (erro) {
    next(erro);
  }
}

export async function obterPorId(req: Request, res: Response, next: NextFunction) {
  try {
    const precoId = Number(req.params.id);
    if (isNaN(precoId)) {
      throw new AppError("ID do preço inválido. Deve ser um número.", 400);
    }

    const preco: Preco = await precosService.obterPorId(precoId);
    
    res.json({
      id: preco.id,
      produtoId: preco.produtoId,
      mercadoId: preco.mercadoId,
      usuarioId: preco.usuarioId,
      preco: preco.preco,
      promocao: preco.promocao,
      data: preco.data
    });
  } catch (erro) {
    next(erro);
  }
}

export async function criar(req: Request, res: Response, next: NextFunction) {
  try {
    const { produtoId, mercadoId, usuarioId, preco, promocao, motivoPromocao, observacao } = req.body;

    if (!produtoId || !mercadoId || !usuarioId || preco === undefined) {
      throw new AppError("Campos obrigatórios ausentes.", 400);
    }

    const dadosPreco: PrecoProps = {
      produtoId: Number(produtoId),
      mercadoId: Number(mercadoId),
      usuarioId: Number(usuarioId),
      preco: Number(preco),
      promocao: Boolean(promocao),
      motivoPromocao,
      observacao,
      data: new Date()
    };

    const precoCriado = await precosService.criar(dadosPreco);

    res.status(201).json({
      mensagem: "Preço registrado com sucesso!",
      preco: {
        id: precoCriado.id,
        produtoId: precoCriado.produtoId,
        mercadoId: precoCriado.mercadoId,
        usuarioId: precoCriado.usuarioId,
        preco: precoCriado.preco,
        promocao: precoCriado.promocao,
        data: precoCriado.data
      }
    });
  } catch (erro) {
    next(erro);
  }
}