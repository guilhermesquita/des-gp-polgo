import { UpdateWinner } from "../../../../../../features/winners/domain/contracts/update-winner";
import { CheckWinnerById } from "../../../../../../features/winners/domain/contracts/check-winner-by-id";
import { describe, it, expect, beforeEach } from "@jest/globals";
import { UpdateWinnerUsecase } from "../../../../../../features/winners/domain/usecase/update-winner.usecase";
import { NotFoundError } from "../../../../../../errors/not-found-error";

describe("UpdateWinner Usecase (unit)", () => {
  let updateWinner: UpdateWinner;
  let checkById: CheckWinnerById;

  beforeEach(() => {
    updateWinner = {
      update: async (
        params: UpdateWinner.Params
      ): Promise<UpdateWinner.Result> => {
        return { sucess: true, message: "Atualizado" };
      },
    };

    checkById = {
      check: async (id: string) => true,
    };
  });

  it("should update when winner exists", async () => {
    const usecase = new UpdateWinnerUsecase(updateWinner, checkById);

    const result = await usecase.update({ id: "1", nome: "X" });

    expect(result.sucess).toBe(true);
    expect(result.message).toBe("Atualizado");
  });

  it("should throw NotFoundError when winner does not exist", async () => {
    checkById = { check: async () => false };
    const usecase = new UpdateWinnerUsecase(updateWinner, checkById);

    await expect(usecase.update({ id: "1", nome: "X" })).rejects.toThrow(
      NotFoundError
    );
  });
});
