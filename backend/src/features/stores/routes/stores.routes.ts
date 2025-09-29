import { Router } from "express";
import { makeGetStoresController } from "../main/factories/controller/get-stores-controller.factory";
import { makeCreateStoreController } from "../main/factories/controller/create-store-controller.factory";
import { makeUpdateStoreController } from "../main/factories/controller/update-store-controller.factory";
import { makeDeleteStoreController } from "../main/factories/controller/delete-store-controller.factory";
import { authMiddleware } from "../../../middlewares/auth.middleware";

const router = Router();

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
router.get("/", (req, res, next) =>
  makeGetStoresController().handle(req, res, next)
);

/**
 * @openapi
 * /api/lojas/:
 *   post:
 *     tags:
 *       - Lojas
 *     summary: Cria uma nova loja
 *     security:
 *       - bearerAuth: []
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
router.post("/", authMiddleware, (req, res, next) =>
  makeCreateStoreController().handle(req, res, next)
);

/**
 * @openapi
 * /api/lojas/{id}:
 *   put:
 *     tags:
 *       - Lojas
 *     security:
 *       - bearerAuth: []
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
router.put("/:id", authMiddleware, (req, res, next) =>
  makeUpdateStoreController().handle(req, res, next)
);

/**
 * @openapi
 * /api/lojas/{id}:
 *   delete:
 *     tags:
 *       - Lojas
 *     security:
 *       - bearerAuth: []
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
router.delete("/:id", authMiddleware, (req, res, next) =>
  makeDeleteStoreController().handle(req, res, next)
);

export default router;
