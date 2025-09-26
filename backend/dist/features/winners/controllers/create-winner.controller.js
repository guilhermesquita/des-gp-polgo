"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWinnerController = void 0;
const bad_request_error_1 = require("../../../errors/bad-request-error");
class CreateWinnerController {
    constructor(createWinners, validation) {
        this.createWinners = createWinners;
        this.validation = validation;
    }
    async handle(req, res, next) {
        try {
            const erro = this.validation.validate(req.body);
            if (erro) {
                throw new bad_request_error_1.BadRequestError(erro.message);
            }
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
            return next(err);
        }
    }
}
exports.CreateWinnerController = CreateWinnerController;
