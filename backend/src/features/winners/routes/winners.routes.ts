import { Router } from "express";
import { makeGetWinnersPageableController } from "../main/factories/controller/get-winners-pageable-controller.factory";
import { makeUpdateWinnerController } from "../main/factories/controller/update-winner-controller.factory";
import { makeDeleteWinnerController } from "../main/factories/controller/delete-winner-controller.factory";
import { makeCreateWinnerController } from "../main/factories/controller/create-winner-controller.factory";
import { makeAggregateWinnersByStateController } from "../main/factories/controller/aggregate-winners-by-state-controller.factory";
import { authMiddleware } from "../../../middlewares/auth.middleware";

/**
 * @openapi
 * tags:
 *   - name: Winners
 *     description: Operations about winners
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateWinnerBody:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *         estado:
 *           type: string
 *         cidade:
 *           type: string
 *         premio:
 *           type: string
 *         data:
 *           type: string
 *           format: date-time
 *       required:
 *         - nome
 *         - estado
 *         - cidade
 *         - premio
 *         - data
 */

const router = Router();

/**
 * @openapi
 * /api/ganhadores/:
 *   get:
 *     tags: [Winners]
 *     summary: Get pageable list of winners
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: orderBy
 *         schema:
 *           type: string
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *       - in: query
 *         name: nome
 *         schema:
 *           type: string
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *       - in: query
 *         name: premio
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A pageable list of winners
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WinnersPage'
 */
const getWinnersPageableController = makeGetWinnersPageableController();
const createWinnerController = makeCreateWinnerController();
const updateWinnerController = makeUpdateWinnerController();
const deleteWinnerController = makeDeleteWinnerController();
const aggregateWinnersByStateController =
  makeAggregateWinnersByStateController();

router.get("/", (req, res, next) =>
  getWinnersPageableController.handle(req, res, next)
);

/**
 * @openapi
 * /api/ganhadores/:
 *   post:
 *     tags: [Winners]
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new winner
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateWinnerBody'
 *     responses:
 *       200:
 *         description: Creation result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sucess:
 *                   type: boolean
 *                 message:
 *                   type: string
 */
router.post("/", authMiddleware, (req, res, next) =>
  createWinnerController.handle(req, res, next)
);

/**
 * @openapi
 * /api/ganhadores/{id}:
 *   put:
 *     tags: [Winners]
 *     security:
 *       - bearerAuth: []
 *     summary: Update an existing winner by id
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
 *             $ref: '#/components/schemas/CreateWinnerBody'
 *     responses:
 *       200:
 *         description: Update result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sucess:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       404:
 *         description: Not found
 */
router.put("/:id", authMiddleware, (req, res, next) =>
  updateWinnerController.handle(req, res, next)
);

/**
 * @openapi
 * /api/ganhadores/{id}:
 *   delete:
 *     tags: [Winners]
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a winner by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Delete result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sucess:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       404:
 *         description: Not found
 */
router.delete("/:id", authMiddleware, (req, res, next) =>
  deleteWinnerController.handle(req, res, next)
);

/**
 * @openapi
 * /api/ganhadores/agregacao:
 *   get:
 *     tags: [Winners]
 *     summary: Aggregate winners by state (UF)
 *     responses:
 *       200:
 *         description: Aggregation result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sucess:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       estado:
 *                         type: string
 *                       total:
 *                         type: integer
 */
router.get("/agregacao", (req, res, next) =>
  aggregateWinnersByStateController.handle(req, res, next)
);

export default router;
