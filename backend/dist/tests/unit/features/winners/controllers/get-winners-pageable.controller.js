"use strict";
// import { Request, Response } from "express";
// import { NextFunction } from "express-serve-static-core";
// import { Validation } from "../../../../../config/contracts/validation";
// import { GetWinnersPageable } from "../../../../../features/winners/domain/contracts/get-winners-pageable";
// import { BadRequestError } from "../../../../../errors/bad-request-error";
// export class GetWinnerController {
//   constructor(
//     readonly getWinners: GetWinnersPageable,
//     private readonly validation: Validation
//   ) {}
//   async handle(req: Request, res: Response, next: NextFunction) {
//     try {
//       const erro = this.validation.validate(req.query);
//       if (erro) {
//         throw new BadRequestError(erro.message);
//       }
//       const {
//         page = "1",
//         limit = "10",
//         order = "asc",
//         nome,
//         estado,
//         premio,
//       } = req.query;
//       const winners = await this.getWinners.pageable({
//         pageable: {
//           page: Number(page) || 1,
//           limit: Number(limit) || 10,
//           order: String(order) as "asc" | "desc",
//         },
//         filters: {
//           nome: nome ? String(nome) : undefined,
//           estado: estado ? String(estado) : undefined,
//           premio: premio ? String(premio) : undefined,
//         },
//       });
//       return res.json(winners);
//     } catch (err) {
//       console.error("Error fetching winners", err);
//       return next(err);
//     }
//   }
// }
