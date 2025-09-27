"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAdminController = void 0;
class LoginAdminController {
    constructor(authenticateAdmin) {
        this.authenticateAdmin = authenticateAdmin;
    }
    async handle(req, res, next) {
        try {
            const { email, password } = req.body;
            const result = await this.authenticateAdmin.authenticate({
                email,
                password,
            });
            if (!result.sucess)
                return res.status(401).json(result);
            return res.json(result);
        }
        catch (err) {
            return next(err);
        }
    }
}
exports.LoginAdminController = LoginAdminController;
