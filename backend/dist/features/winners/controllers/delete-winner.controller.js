"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWinnerController = void 0;
class DeleteWinnerController {
    constructor(deleteWinner) {
        this.deleteWinner = deleteWinner;
    }
    async handle(req, res, next) {
        try {
            const { id } = req.params;
            const result = await this.deleteWinner.delete({ id });
            if (!result.sucess) {
                return res.status(404).json(result);
            }
            return res.json(result);
        }
        catch (err) {
            return next(err);
        }
    }
}
exports.DeleteWinnerController = DeleteWinnerController;
