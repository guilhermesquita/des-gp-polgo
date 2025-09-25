"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinnerRepository = void 0;
const winner_model_1 = __importDefault(require("../domain/model/winner.model"));
class WinnerRepository {
    async pageable(params) {
        const { page = 1, limit = 10, orderBy = "asc", order = "name", } = params.pageable;
        const { nome, estado, premio } = params.filters || {};
        const skip = (page - 1) * limit;
        const query = {};
        if (nome)
            query.nome = { $regex: nome, $options: "i" };
        if (estado)
            query.estado = estado;
        if (premio)
            query.premio = premio;
        const winners = await winner_model_1.default
            .find(query)
            .sort({ [order]: orderBy === "asc" ? 1 : -1 })
            .skip(skip)
            .limit(limit)
            .lean();
        const total = await winner_model_1.default.countDocuments(query);
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
    async create(params) {
        await winner_model_1.default.create({
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
    async update(params) {
        const { id, nome, estado, cidade, premio, data } = params;
        const updateData = {};
        if (nome !== undefined)
            updateData.nome = nome;
        if (estado !== undefined)
            updateData.estado = estado;
        if (cidade !== undefined)
            updateData.cidade = cidade;
        if (premio !== undefined)
            updateData.premio = premio;
        if (data !== undefined)
            updateData.data = data;
        const updated = await winner_model_1.default.findByIdAndUpdate(id, updateData, {
            new: true,
        });
        if (!updated) {
            return { sucess: false, message: "Registro não encontrado" };
        }
        return { sucess: true, message: "Dados atualizados com sucesso" };
    }
    async delete(params) {
        const { id } = params;
        const deleted = await winner_model_1.default.findByIdAndDelete(id).lean();
        if (!deleted) {
            return { sucess: false, message: "Registro não encontrado" };
        }
        return { sucess: true, message: "Registro removido com sucesso" };
    }
}
exports.WinnerRepository = WinnerRepository;
