import { CreateWinner } from "../../../../../../features/winners/domain/contracts/create-winner";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("CreateWinner Usecase", () => {
  let createWinner: CreateWinner;

  beforeEach(() => {
    createWinner = {
      create: async (
        params: CreateWinner.Params
      ): Promise<CreateWinner.Result> => {
        if (!params.nome) {
          return { sucess: false, message: "Nome é obrigatório" };
        }
        return { sucess: true, message: "Winner criado com sucesso" };
      },
    };
  });

  it("deve criar um vencedor com sucesso quando todos os campos são válidos", async () => {
    const params: CreateWinner.Params = {
      nome: "Juliano",
      estado: "RJ",
      cidade: "Rio de Janeiro",
      premio: "Carro",
      data: new Date(),
    };

    const result = await createWinner.create(params);

    expect(result.sucess).toBe(true);
    expect(result.message).toBe("Winner criado com sucesso");
  });

  it("deve retornar erro se o nome não for informado", async () => {
    const params: CreateWinner.Params = {
      nome: "",
      estado: "RJ",
      cidade: "Rio de Janeiro",
      premio: "Carro",
      data: new Date(),
    };

    const result = await createWinner.create(params);

    expect(result.sucess).toBe(false);
    expect(result.message).toBe("Nome é obrigatório");
  });
});
