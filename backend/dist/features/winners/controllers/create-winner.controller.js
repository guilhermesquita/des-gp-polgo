"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWinnerController = void 0;
class CreateWinnerController {
    constructor(createWinners) {
        this.createWinners = createWinners;
    }
    async handle(req, res) {
        try {
            const { nome, estado, cidade, premio, data } = req.body;
            const winners = await this.createWinners.create({
                cidade,
                estado,
                nome,
                premio,
                data,
            });
            return res.json(winners);
        }
        catch (err) {
            console.error("Error fetching winners", err);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
exports.CreateWinnerController = CreateWinnerController;
