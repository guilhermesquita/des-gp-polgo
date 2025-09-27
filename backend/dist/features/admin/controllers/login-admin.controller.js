"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAdminController = void 0;
class LoginAdminController {
    constructor(authenticateAdmin) {
        this.authenticateAdmin = authenticateAdmin;
    }
    async handle(req, res) {
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
            console.error(err);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
exports.LoginAdminController = LoginAdminController;
