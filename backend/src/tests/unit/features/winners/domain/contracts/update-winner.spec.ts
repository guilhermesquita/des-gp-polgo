import { UpdateWinner } from "../../../../../../features/winners/domain/contracts/update-winner";

describe("UpdateWinner Usecase", () => {
  let updateWinner: UpdateWinner;

  beforeEach(() => {
    updateWinner = {
      update: jest.fn(async (params: UpdateWinner.Params) => {
        if (params.id === "123") {
          return {
            sucess: true,
            message: `Winner ${params.id} updated successfully`,
          };
        }
        return { sucess: false, message: "Winner not found" };
      }),
    };
  });

  it("deve atualizar um vencedor existente com sucesso", async () => {
    const result = await updateWinner.update({
      id: "123",
      nome: "Novo Nome",
      cidade: "Manaus",
    });

    expect(result.sucess).toBe(true);
    expect(result.message).toBe("Winner 123 updated successfully");
  });

  it("deve retornar erro ao tentar atualizar um vencedor inexistente", async () => {
    const result = await updateWinner.update({
      id: "999",
      nome: "Outro Nome",
    });

    expect(result.sucess).toBe(false);
    expect(result.message).toBe("Winner not found");
  });
});
