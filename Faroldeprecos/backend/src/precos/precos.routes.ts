import { Router } from "express";
import * as precosController from "./precos.controller";

const rotasPrecos = Router();

/**
 * @swagger
 * /api/precos:
 *   get:
 *     summary: Retorna a lista de todos os preços registrados
 *     tags: [Precos]
 *     responses:
 *       200:
 *         description: Lista de preços retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Preco'
 */
rotasPrecos.get("/api/precos", precosController.obterTodos);

/**
 * @swagger
 * /api/precos/{id}:
 *   get:
 *     summary: Retorna os detalhes de um preço pelo ID
 *     tags: [Precos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID numérico do preço
 *     responses:
 *       200:
 *         description: Preço encontrado com sucesso
 *       404:
 *         description: Preço não encontrado
 *       400:
 *         description: ID inválido
 */
rotasPrecos.get("/api/precos/:id", precosController.obterPorId);

/**
 * @swagger
 * /api/precos:
 *   post:
 *     summary: Registra um novo preço no sistema
 *     tags: [Precos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Preco'
 *     responses:
 *       201:
 *         description: Preço registrado com sucesso
 *       400:
 *         description: Erro de validação nos dados enviados
 */
rotasPrecos.post("/api/precos", precosController.criar);

export default rotasPrecos;