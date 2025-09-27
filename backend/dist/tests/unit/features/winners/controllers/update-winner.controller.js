"use strict";
// import { Request, Response, NextFunction } from "express";
// import { UpdateWinner } from "../../../../../features/winners/domain/contracts/update-winner";
// export class UpdateWinnerController {
//   constructor(readonly updateWinner: UpdateWinner) {}
//   async handle(req: Request, res: Response, next: NextFunction) {
//     try {
//       const { id } = req.params;
//       const { nome, estado, cidade, premio, data } = req.body;
//       const result = await this.updateWinner.update({
//         id,
//         nome,
//         estado,
//         cidade,
//         premio,
//         data: data ? new Date(data) : undefined,
//       });
//       if (!result.sucess) {
//         return res.status(404).json(result);
//       }
//       return res.json(result);
//     } catch (err) {
//       return next(err);
//     }
//   }
// }
