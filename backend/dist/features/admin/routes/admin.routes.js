"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_admin_controller_factory_1 = require("../main/factories/controller/register-admin-controller.factory");
const login_admin_controller_factory_1 = require("../main/factories/controller/login-admin-controller.factory");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const registerController = (0, register_admin_controller_factory_1.makeRegisterAdminController)();
const loginController = (0, login_admin_controller_factory_1.makeLoginAdminController)();
/**
 * @openapi
 * /api/admin/register:
 *   post:
 *     tags: [Admin]
 *     summary: Register a new admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminAuthRequest'
 *     responses:
 *       200:
 *         description: Registration result
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
router.post("/register", (req, res) => registerController.handle(req, res));
/**
 * @openapi
 * /api/admin/login:
 *   post:
 *     tags: [Admin]
 *     summary: Login an admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminAuthRequest'
 *     responses:
 *       200:
 *         description: Authentication result with JWT token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 */
router.post("/login", (req, res) => loginController.handle(req, res));
/**
 * @openapi
 * /api/admin/profile:
 *   get:
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     summary: Get profile of authenticated admin
 *     responses:
 *       200:
 *         description: Admin profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sucess:
 *                   type: boolean
 *                 user:
 *                   type: object
 */
router.get("/profile", auth_middleware_1.authMiddleware, (req, res) => {
    return res.json({ sucess: true, user: req.user });
});
exports.default = router;
