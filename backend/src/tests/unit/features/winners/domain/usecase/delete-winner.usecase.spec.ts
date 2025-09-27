import { DeleteWinner } from "../../../../../../features/winners/domain/contracts/delete-winner";
import { CheckWinnerById } from "../../../../../../features/winners/domain/contracts/check-winner-by-id";
import { describe, it, expect, beforeEach } from "@jest/globals";
import { NotFoundError } from "../../../../../../errors/not-found-error";
import { DeleteWinnerUsecase } from "../../../../../../features/winners/domain/usecase/delete-winner.usecase";

describe("DeleteWinner Usecase (unit)", () => {
  let deleteWinner: DeleteWinner;
  let checkById: CheckWinnerById;

  beforeEach(() => {
    deleteWinner = {
      delete: async (
        params: DeleteWinner.Params
      ): Promise<DeleteWinner.Result> => {
        return { sucess: true, message: "Removido" };
      },
    };

    checkById = { check: async (id: string) => true };
  });

  it("should delete when winner exists", async () => {
    const usecase = new DeleteWinnerUsecase(deleteWinner, checkById);

    const result = await usecase.delete({ id: "1" });

    expect(result.sucess).toBe(true);
    expect(result.message).toBe("Removido");
  });

  it("should throw NotFoundError when winner does not exist", async () => {
    checkById = { check: async () => false };
    const usecase = new DeleteWinnerUsecase(deleteWinner, checkById);

    await expect(usecase.delete({ id: "1" })).rejects.toThrow(NotFoundError);
  });
});
