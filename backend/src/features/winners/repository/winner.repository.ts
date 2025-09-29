import { CreateWinner } from "../domain/contracts/create-winner";
import { GetWinnersPageable } from "../domain/contracts/get-winners-pageable";
import { UpdateWinner } from "../domain/contracts/update-winner";
import { DeleteWinner } from "../domain/contracts/delete-winner";
import winnerModel from "../domain/model/winner.model";
import { AggregateWinnersByState } from "../domain/contracts/aggregate-winners-by-state";
import { CheckWinnerById } from "../domain/contracts/check-winner-by-id";

export class WinnerRepository
  implements
    GetWinnersPageable,
    CreateWinner,
    UpdateWinner,
    DeleteWinner,
    CheckWinnerById
{
  async pageable(
    params: GetWinnersPageable.Params
  ): Promise<GetWinnersPageable.Result> {
    const { page = 1, limit = 10, order = "ASC" } = params.pageable;
    const sortBy = "data";

    const { nome, estado, premio } = params.filters || {};

    const skip = (page - 1) * limit;

    const query: any = {};
    if (nome) query.nome = { $regex: nome, $options: "i" };
    if (estado) query.estado = { $regex: estado, $options: "i" };
    if (premio) query.premio = { $regex: premio, $options: "i" };

    const winners = await winnerModel
      .find(query)
      .sort({ [sortBy]: order === "ASC" ? 1 : -1 })
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

  async create(params: CreateWinner.Params): Promise<CreateWinner.Result> {
    await winnerModel.create({
      nome: params.nome,
      estado: params.estado,
      cidade: params.cidade,
      premio: params.premio,
      data: params.data,
    });

    return {
      sucess: true,
      message: "Dados criados com sucesso",
    };
  }

  async update(params: UpdateWinner.Params): Promise<UpdateWinner.Result> {
    const { id, nome, estado, cidade, premio, data } = params;

    const updateData: any = {};
    if (nome !== undefined) updateData.nome = nome;
    if (estado !== undefined) updateData.estado = estado;
    if (cidade !== undefined) updateData.cidade = cidade;
    if (premio !== undefined) updateData.premio = premio;
    if (data !== undefined) updateData.data = data;

    await winnerModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return { sucess: true, message: "Dados atualizados com sucesso" };
  }

  async delete(params: DeleteWinner.Params): Promise<DeleteWinner.Result> {
    const { id } = params;

    const deleted = await winnerModel.findByIdAndDelete(id).lean();

    if (!deleted) {
      return { sucess: false, message: "Registro não encontrado" };
    }

    return { sucess: true, message: "Registro removido com sucesso" };
  }

  async check(id: string): Promise<boolean> {
    const winner = await winnerModel.findById(id);
    return !!winner;
  }

  async aggregate(): Promise<AggregateWinnersByState.Result> {
    const result = await winnerModel
      .aggregate([
        {
          $group: {
            _id: "$estado",
            total: { $sum: 1 },
            vencedores: { $push: "$nome" },
          },
        },
        { $project: { estado: "$_id", total: 1, vencedores: 1, _id: 0 } },
        { $sort: { estado: 1 } },
      ])
      .exec();

    return {
      sucess: true,
      data: result.map((r: any) => ({
        estado: r.estado,
        total: r.total,
        vencedores: r.vencedores,
      })),
      message: "Agrupamento por estado realizado com sucesso",
    };
  }
}
