"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStoresController = void 0;
const bad_request_error_1 = require("../../../errors/bad-request-error");
class GetStoresController {
    constructor(getStores, validation) {
        this.getStores = getStores;
        this.validation = validation;
    }
    async handle(req, res, next) {
        try {
            if (this.validation) {
                const erro = this.validation.validate(req.query);
                if (erro)
                    throw new bad_request_error_1.BadRequestError(erro.message);
            }
            const { page = "1", limit = "10", order = "asc", nome, estado, cidade, cnpj, } = req.query;
            const result = await this.getStores.pageable({
                pageable: {
                    page: Number(page) || 1,
                    limit: Number(limit) || 10,
                    order: String(order),
                },
                filters: {
                    nome: nome ? String(nome) : undefined,
                    estado: estado ? String(estado) : undefined,
                    cidade: cidade ? String(cidade) : undefined,
                    cnpj: cnpj ? String(cnpj) : undefined,
                },
            });
            return res.json(result);
        }
        catch (err) {
            return next(err);
        }
    }
}
exports.GetStoresController = GetStoresController;
