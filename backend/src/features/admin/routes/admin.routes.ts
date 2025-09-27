import { Router } from "express";
import { makeRegisterAdminController } from "../main/factories/controller/register-admin-controller.factory";
import { makeLoginAdminController } from "../main/factories/controller/login-admin-controller.factory";
import { authMiddleware } from "../../../middlewares/auth.middleware";

const router = Router();

const registerController = makeRegisterAdminController();
const loginController = makeLoginAdminController();

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
router.post("/register", (req, res, next) =>
  registerController.handle(req, res, next)
);
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
router.post("/login", (req, res, next) =>
  loginController.handle(req, res, next)
);

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
router.get("/profile", authMiddleware, (req: any, res, next) => {
  try {
    return res.json({ sucess: true, user: req.user });
  } catch (err) {
    return next(err);
  }
});

export default router;
