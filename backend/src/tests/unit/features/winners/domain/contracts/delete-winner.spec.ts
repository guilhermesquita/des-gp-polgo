import { DeleteWinner } from "../../../../../../features/winners/domain/contracts/delete-winner";

describe("DeleteWinner Usecase", () => {
  let deleteWinner: DeleteWinner;

  beforeEach(() => {
    deleteWinner = {
      delete: jest.fn(async ({ id }: DeleteWinner.Params) => {
        if (id === "123") {
          return { sucess: true, message: "Winner deleted successfully" };
        }
        return { sucess: false, message: "Winner not found" };
      }),
    };
  });

  it("deve deletar um vencedor existente com sucesso", async () => {
    const result = await deleteWinner.delete({ id: "123" });

    expect(result.sucess).toBe(true);
    expect(result.message).toBe("Winner deleted successfully");
  });

  it("deve retornar erro ao tentar deletar um vencedor inexistente", async () => {
    const result = await deleteWinner.delete({ id: "999" });

    expect(result.sucess).toBe(false);
    expect(result.message).toBe("Winner not found");
  });
});
