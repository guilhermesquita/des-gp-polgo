import { CreateStore } from "../domain/contracts/create-store";
import { GetStores } from "../domain/contracts/get-stores";
import { UpdateStore } from "../domain/contracts/update-store";
import { DeleteStore } from "../domain/contracts/delete-store";
import storeModel from "../domain/model/store.model";
import { CheckStoreById } from "../domain/contracts/check-store-by-id";

export class StoreRepository
  implements GetStores, CreateStore, UpdateStore, DeleteStore, CheckStoreById
{
  async pageable(params: GetStores.Params): Promise<GetStores.Result> {
    const { page = 1, limit = 10, order = "asc" } = params.pageable || {};

    const { nome, estado, cidade, cnpj } = params.filters || {};

    const skip = (page - 1) * limit;

    const query: any = {};
    if (nome) query.nome = { $regex: nome, $options: "i" };
    if (estado) query.estado = estado;
    if (cidade) query.cidade = cidade;
    if (cnpj) query.cnpj = cnpj;

    const stores = await storeModel
      .find(query)
      .sort({ createdAt: order === "asc" ? 1 : -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await storeModel.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    return {
      sucess: true,
      data: stores,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
      message: "Dados recuperados com sucesso",
    };
  }

  async create(params: CreateStore.Params): Promise<CreateStore.Result> {
    const created = await storeModel.create({
      nome: params.nome,
      cnpj: params.cnpj,
      estado: params.estado,
      cidade: params.cidade,
      endereco: params.endereco,
      location: params.location,
    });

    return { sucess: true, message: "Loja criada", data: created };
  }

  async update(params: UpdateStore.Params): Promise<UpdateStore.Result> {
    await storeModel.findByIdAndUpdate(
      params.id,
      { $set: params },
      { new: true }
    );
    return { sucess: true, message: "Loja atualizada" };
  }

  async delete(params: DeleteStore.Params): Promise<DeleteStore.Result> {
    const deleted = await storeModel.findByIdAndDelete(params.id).lean();
    if (!deleted) return { sucess: false, message: "Registro não encontrado" };
    return { sucess: true, message: "Registro removido" };
  }

  async check(id: string): Promise<boolean> {
    const store = await storeModel.findById(id).lean();
    return !!store;
  }
}
