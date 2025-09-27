"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAdminController = void 0;
class RegisterAdminController {
    constructor(createAdmin) {
        this.createAdmin = createAdmin;
    }
    async handle(req, res, next) {
        try {
            const { email, password } = req.body;
            const result = await this.createAdmin.create({ email, password });
            if (!result.sucess)
                return res.status(400).json(result);
            return res.json(result);
        }
        catch (err) {
            return next(err);
        }
    }
}
exports.RegisterAdminController = RegisterAdminController;
