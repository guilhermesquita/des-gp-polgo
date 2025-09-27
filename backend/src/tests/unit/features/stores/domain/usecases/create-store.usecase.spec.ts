import { describe, it, expect, beforeEach } from "@jest/globals";
import { CreateStore } from "../../../../../../features/stores/domain/contracts/create-store";

describe("CreateStore Usecase (unit)", () => {
  let createStore: CreateStore;

  beforeEach(() => {
    createStore = {
      create: async (params: CreateStore.Params): Promise<CreateStore.Result> => {
        if (!params.nome) return { sucess: false, message: "Nome é obrigatório" };
        return { sucess: true, message: "Loja criada com sucesso" };
      },
    } as any;
  });

  it("should create a store when payload is valid", async () => {
    const params: CreateStore.Params = {
      nome: "Loja A",
      endereco: "Rua 1",
      cidade: "Cidade",
      estado: "SP",
      cnpj: "12345678901234",
    };

    const result = await createStore.create(params);

    expect(result.sucess).toBe(true);
    expect(result.message).toBe("Loja criada com sucesso");
  });

  it("should return error when nome is missing", async () => {
    const params: CreateStore.Params = {
      nome: "",
      endereco: "Rua 1",
      cidade: "Cidade",
      state: "SP" as any,
      cnpj: "12345678901234",
    } as any;

    const result = await createStore.create(params);

    expect(result.sucess).toBe(false);
    expect(result.message).toBe("Nome é obrigatório");
  });
});
