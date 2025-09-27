import { CreateStore } from "../../../../../../features/stores/domain/contracts/create-store";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("CreateStore contract (unit)", () => {
  let createStore: CreateStore;

  beforeEach(() => {
    createStore = {
      create: async (
        params: CreateStore.Params
      ): Promise<CreateStore.Result> => {
        return { sucess: true, message: "ok", data: { id: "1", ...params } };
      },
    };
  });

  it("should return sucess and data when create is called", async () => {
    const params: CreateStore.Params = {
      nome: "L",
      cnpj: "1",
      estado: "SP",
      cidade: "C",
      endereco: "R",
    };
    const result = await createStore.create(params);
    expect(result.sucess).toBe(true);
    expect(result.data).toBeDefined();
  });
});
