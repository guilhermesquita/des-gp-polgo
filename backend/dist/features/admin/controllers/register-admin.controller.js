"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAdminController = void 0;
class RegisterAdminController {
    constructor(createAdmin) {
        this.createAdmin = createAdmin;
    }
    async handle(req, res) {
        try {
            const { email, password } = req.body;
            const result = await this.createAdmin.create({ email, password });
            if (!result.sucess)
                return res.status(400).json(result);
            return res.json(result);
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
exports.RegisterAdminController = RegisterAdminController;
