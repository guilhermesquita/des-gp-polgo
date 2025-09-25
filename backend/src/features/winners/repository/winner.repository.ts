import { GetWinnersPageable } from "../domain/contracts/get-winners-pageable";
import winnerModel from "../domain/model/winner.model";

export class WinnerRepository implements GetWinnersPageable {
  async pageable(
    params: GetWinnersPageable.Params
  ): Promise<GetWinnersPageable.Result> {
    const {
      page = 1,
      limit = 10,
      orderBy = "asc",
      order = "name",
    } = params.pageable;

    const { nome, estado, premio } = params.filters || {};

    const skip = (page - 1) * limit;

    const query: any = {};
    if (nome) query.nome = { $regex: nome, $options: "i" };
    if (estado) query.estado = estado;
    if (premio) query.premio = premio;

    const winners = await winnerModel
      .find(query)
      .sort({ [order]: orderBy === "asc" ? 1 : -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await winnerModel.countDocuments(query);

    const totalPages = Math.ceil(total / limit);

    return {
      sucess: true,
      data: winners,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
      message: "Dados recuperados com sucesso",
    };
  }
}
