"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWinnerController = void 0;
class UpdateWinnerController {
    constructor(updateWinner) {
        this.updateWinner = updateWinner;
    }
    async handle(req, res) {
        try {
            const { id } = req.params;
            const { nome, estado, cidade, premio, data } = req.body;
            const result = await this.updateWinner.update({
                id,
                nome,
                estado,
                cidade,
                premio,
                data: data ? new Date(data) : undefined,
            });
            if (!result.sucess) {
                return res.status(404).json(result);
            }
            return res.json(result);
        }
        catch (err) {
            console.error("Error updating winner", err);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
exports.UpdateWinnerController = UpdateWinnerController;
