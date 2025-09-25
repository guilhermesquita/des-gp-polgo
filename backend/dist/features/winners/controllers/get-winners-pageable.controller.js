"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWinnerController = void 0;
class GetWinnerController {
    constructor(getWinners) {
        this.getWinners = getWinners;
    }
    async handle(req, res) {
        try {
            const { page = "1", limit = "10", orderBy = "asc", order = "name", nome, estado, premio, } = req.query;
            const winners = await this.getWinners.pageable({
                pageable: {
                    page: Number(page) || 1,
                    limit: Number(limit) || 10,
                    orderBy: String(orderBy),
                    order: String(order),
                },
                filters: {
                    nome: nome ? String(nome) : undefined,
                    estado: estado ? String(estado) : undefined,
                    premio: premio ? String(premio) : undefined,
                },
            });
            return res.json(winners);
        }
        catch (err) {
            console.error("Error fetching winners", err);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
exports.GetWinnerController = GetWinnerController;
