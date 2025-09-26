"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWinnerController = void 0;
const bad_request_error_1 = require("../../../errors/bad-request-error");
class GetWinnerController {
    constructor(getWinners, validation) {
        this.getWinners = getWinners;
        this.validation = validation;
    }
    async handle(req, res, next) {
        try {
            const erro = this.validation.validate(req.query);
            if (erro) {
                throw new bad_request_error_1.BadRequestError(erro.message);
            }
            const { page = "1", limit = "10", order = "asc", nome, estado, premio, } = req.query;
            const winners = await this.getWinners.pageable({
                pageable: {
                    page: Number(page) || 1,
                    limit: Number(limit) || 10,
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
            return next(err);
        }
    }
}
exports.GetWinnerController = GetWinnerController;
