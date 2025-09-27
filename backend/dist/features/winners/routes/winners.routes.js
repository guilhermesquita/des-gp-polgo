"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_winners_pageable_controller_factory_1 = require("../main/factories/controller/get-winners-pageable-controller.factory");
const update_winner_controller_factory_1 = require("../main/factories/controller/update-winner-controller.factory");
const delete_winner_controller_factory_1 = require("../main/factories/controller/delete-winner-controller.factory");
const create_winner_controller_factory_1 = require("../main/factories/controller/create-winner-controller.factory");
const aggregate_winners_by_state_controller_factory_1 = require("../main/factories/controller/aggregate-winners-by-state-controller.factory");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
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
const router = (0, express_1.Router)();
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
const getWinnersPageableController = (0, get_winners_pageable_controller_factory_1.makeGetWinnersPageableController)();
const createWinnerController = (0, create_winner_controller_factory_1.makeCreateWinnerController)();
const updateWinnerController = (0, update_winner_controller_factory_1.makeUpdateWinnerController)();
const deleteWinnerController = (0, delete_winner_controller_factory_1.makeDeleteWinnerController)();
const aggregateWinnersByStateController = (0, aggregate_winners_by_state_controller_factory_1.makeAggregateWinnersByStateController)();
router.get("/", (req, res, next) => getWinnersPageableController.handle(req, res, next));
/**
 * @openapi
 * /api/ganhadores/:
 *   post:
 *     tags: [Winners]
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
router.post("/", auth_middleware_1.authMiddleware, (req, res, next) => createWinnerController.handle(req, res, next));
/**
 * @openapi
 * /api/ganhadores/{id}:
 *   put:
 *     tags: [Winners]
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
router.put("/:id", auth_middleware_1.authMiddleware, (req, res, next) => updateWinnerController.handle(req, res, next));
/**
 * @openapi
 * /api/ganhadores/{id}:
 *   delete:
 *     tags: [Winners]
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
router.delete("/:id", auth_middleware_1.authMiddleware, (req, res, next) => deleteWinnerController.handle(req, res, next));
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
router.get("/agregacao", (req, res, next) => aggregateWinnersByStateController.handle(req, res, next));
exports.default = router;
