import { Router } from "express";
import * as mercadosController from "./mercados.controller";

const rotasMercados = Router();

/**
 * @swagger
 * tags:
 *   name: Mercados
 *   description: CRUD de gestão de mercados
 */

/**
 * @swagger
 * /mercados:
 *   post:
 *     summary: Cria um novo mercado
 *     tags: [Mercados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Supermercado Preço Bom
 *               endereco:
 *                 type: string
 *                 example: Av. Central, 100
 *     responses:
 *       201:
 *         description: Mercado criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
rotasMercados.post("/mercados", mercadosController.criar);

/**
 * @swagger
 * /mercados:
 *   get:
 *     summary: Lista todos os mercados
 *     tags: [Mercados]
 *     responses:
 *       200:
 *         description: Lista de mercados retornada com sucesso
 */
rotasMercados.get("/mercados", mercadosController.listarTodos);

/**
 * @swagger
 * /mercados/{id}:
 *   get:
 *     summary: Busca um mercado pelo ID
 *     tags: [Mercados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do mercado
 *     responses:
 *       200:
 *         description: Mercado encontrado
 *       404:
 *         description: Mercado não encontrado
 */
rotasMercados.get("/mercados/:id", mercadosController.buscarPorId);

/**
 * @swagger
 * /mercados/{id}:
 *   put:
 *     summary: Atualiza um mercado existente
 *     tags: [Mercados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Supermercado Preço Bom Atualizado
 *               endereco:
 *                 type: string
 *                 example: Av. Central, 200
 *     responses:
 *       200:
 *         description: Mercado atualizado com sucesso
 *       404:
 *         description: Mercado não encontrado
 */
rotasMercados.put("/mercados/:id", mercadosController.atualizar);

/**
 * @swagger
 * /mercados/{id}:
 *   delete:
 *     summary: Deleta um mercado pelo ID
 *     tags: [Mercados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Mercado deletado com sucesso
 *       404:
 *         description: Mercado não encontrado
 */
rotasMercados.delete("/mercados/:id", mercadosController.deletar);

export default rotasMercados;