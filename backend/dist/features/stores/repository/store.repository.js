"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreRepository = void 0;
const store_model_1 = __importDefault(require("../domain/model/store.model"));
class StoreRepository {
    async pageable(params) {
        const { page = 1, limit = 10, order = "asc" } = params.pageable || {};
        const { nome, estado, cidade, cnpj } = params.filters || {};
        const skip = (page - 1) * limit;
        const query = {};
        if (nome)
            query.nome = { $regex: nome, $options: "i" };
        if (estado)
            query.estado = estado;
        if (cidade)
            query.cidade = cidade;
        if (cnpj)
            query.cnpj = cnpj;
        const stores = await store_model_1.default
            .find(query)
            .sort({ createdAt: order === "asc" ? 1 : -1 })
            .skip(skip)
            .limit(limit)
            .lean();
        const total = await store_model_1.default.countDocuments(query);
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
    async create(params) {
        const created = await store_model_1.default.create({
            nome: params.nome,
            cnpj: params.cnpj,
            estado: params.estado,
            cidade: params.cidade,
            endereco: params.endereco,
            location: params.location,
        });
        return { sucess: true, message: "Loja criada", data: created };
    }
    async update(params) {
        await store_model_1.default.findByIdAndUpdate(params.id, { $set: params }, { new: true });
        return { sucess: true, message: "Loja atualizada" };
    }
    async delete(params) {
        const deleted = await store_model_1.default.findByIdAndDelete(params.id).lean();
        if (!deleted)
            return { sucess: false, message: "Registro não encontrado" };
        return { sucess: true, message: "Registro removido" };
    }
}
exports.StoreRepository = StoreRepository;
