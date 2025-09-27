import { Request, Response, NextFunction } from "express";
import { GetStores } from "../domain/contracts/get-stores";
import { Validation } from "../../../config/contracts/validation";
import { BadRequestError } from "../../../errors/bad-request-error";

export class GetStoresController {
  constructor(
    readonly getStores: GetStores,
    private readonly validation?: Validation
  ) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      if (this.validation) {
        const erro = this.validation.validate(req.query);
        if (erro) throw new BadRequestError(erro.message);
      }

      const {
        page = "1",
        limit = "10",
        order = "asc",
        nome,
        estado,
        cidade,
        cnpj,
      } = req.query;

      const result = await this.getStores.pageable({
        pageable: {
          page: Number(page) || 1,
          limit: Number(limit) || 10,
          order: String(order) as string,
        },
        filters: {
          nome: nome ? String(nome) : undefined,
          estado: estado ? String(estado) : undefined,
          cidade: cidade ? String(cidade) : undefined,
          cnpj: cnpj ? String(cnpj) : undefined,
        },
      });

      return res.json(result);
    } catch (err) {
      return next(err);
    }
  }
}
