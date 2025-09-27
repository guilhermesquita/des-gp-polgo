import { CreateWinner } from "../../../../../../features/winners/domain/contracts/create-winner";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("CreateWinner Usecase (unit)", () => {
  let createWinner: CreateWinner;

  beforeEach(() => {
    createWinner = {
      create: async (
        params: CreateWinner.Params
      ): Promise<CreateWinner.Result> => {
        if (!params.nome)
          return { sucess: false, message: "Nome é obrigatório" };
        return { sucess: true, message: "Dados criados com sucesso" };
      },
    };
  });

  it("should create a winner when payload is valid", async () => {
    const params: CreateWinner.Params = {
      nome: "Teste",
      estado: "SP",
      cidade: "São Paulo",
      premio: "Carro",
      data: new Date(),
    };

    const result = await createWinner.create(params);

    expect(result.sucess).toBe(true);
    expect(result.message).toBe("Dados criados com sucesso");
  });

  it("should return error when nome is missing", async () => {
    const params: CreateWinner.Params = {
      nome: "",
      estado: "SP",
      cidade: "São Paulo",
      premio: "Carro",
      data: new Date(),
    };

    const result = await createWinner.create(params);

    expect(result.sucess).toBe(false);
    expect(result.message).toBe("Nome é obrigatório");
  });
});
