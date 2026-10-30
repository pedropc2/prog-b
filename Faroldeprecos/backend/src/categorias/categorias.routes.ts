import { Router } from "express";
import * as categoriasController from "./categorias.controller";

const rotasCategorias = Router();

// Rotas públicas (não precisam de token para o utilizador ver as categorias)
rotasCategorias.get("/categorias", categoriasController.listarTodas);
rotasCategorias.get("/categorias/:id", categoriasController.buscarPorId);

export default rotasCategorias;