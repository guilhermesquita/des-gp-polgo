"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_stores_controller_factory_1 = require("../main/factories/controller/get-stores-controller.factory");
const create_store_controller_factory_1 = require("../main/factories/controller/create-store-controller.factory");
const update_store_controller_factory_1 = require("../main/factories/controller/update-store-controller.factory");
const delete_store_controller_factory_1 = require("../main/factories/controller/delete-store-controller.factory");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /api/lojas/:
 *   get:
 *     tags:
 *       - Lojas
 *     summary: Lista lojas (pageable)
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Página
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Itens por página
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *         description: Order direction (asc|desc)
 *       - in: query
 *         name: nome
 *         schema:
 *           type: string
 *         description: Filter by store name
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *         description: Filter by state
 *       - in: query
 *         name: cidade
 *         schema:
 *           type: string
 *         description: Filter by city
 *       - in: query
 *         name: cnpj
 *         schema:
 *           type: string
 *         description: Filter by CNPJ
 *     responses:
 *       200:
 *         description: Lista de lojas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StoresPage'
 */
router.get("/", (req, res, next) => (0, get_stores_controller_factory_1.makeGetStoresController)().handle(req, res, next));
/**
 * @openapi
 * /api/lojas/:
 *   post:
 *     tags:
 *       - Lojas
 *     summary: Cria uma nova loja
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               estado:
 *                 type: string
 *               cidade:
 *                 type: string
 *               endereco:
 *                 type: string
 *               location:
 *                 type: object
 *                 properties:
 *                   lat:
 *                     type: number
 *                   lng:
 *                     type: number
 *             required:
 *               - nome
 *               - cnpj
 *               - estado
 *               - cidade
 *               - endereco
 *     responses:
 *       201:
 *         description: Loja criada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Store'
 */
router.post("/", auth_middleware_1.authMiddleware, (req, res, next) => (0, create_store_controller_factory_1.makeCreateStoreController)().handle(req, res, next));
/**
 * @openapi
 * /api/lojas/{id}:
 *   put:
 *     tags:
 *       - Lojas
 *     summary: Atualiza uma loja por id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Store'
 *     responses:
 *       200:
 *         description: Loja atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Store'
 */
router.put("/:id", auth_middleware_1.authMiddleware, (req, res, next) => (0, update_store_controller_factory_1.makeUpdateStoreController)().handle(req, res, next));
/**
 * @openapi
 * /api/lojas/{id}:
 *   delete:
 *     tags:
 *       - Lojas
 *     summary: Remove uma loja por id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Loja removida
 */
router.delete("/:id", auth_middleware_1.authMiddleware, (req, res, next) => (0, delete_store_controller_factory_1.makeDeleteStoreController)().handle(req, res, next));
exports.default = router;
