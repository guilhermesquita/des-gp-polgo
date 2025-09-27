import { describe, it, expect, beforeEach } from "@jest/globals";
import { UpdateStore } from "../../../../../../features/stores/domain/contracts/update-store";
import { CheckStoreById } from "../../../../../../features/stores/domain/contracts/check-store-by-id";
import { UpdateStoreUsecase } from "../../../../../../features/stores/domain/usecase/update-store.usecase";

describe("UpdateStore Usecase (unit)", () => {
  let updateStore: UpdateStore;
  let checkStoreById: CheckStoreById;
  let usecase: UpdateStoreUsecase;

  beforeEach(() => {
    updateStore = {
      update: async (params: any) => ({ sucess: true, message: "ok" }),
    } as any;
    checkStoreById = { check: async (id: string) => true } as any;
    usecase = new UpdateStoreUsecase(updateStore, checkStoreById);
  });

  it("should update successfully when store exists", async () => {
    const result = await usecase.update({ id: "1", nome: "Loja" } as any);
    expect(result.sucess).toBe(true);
  });

  it("should throw NotFoundError when store does not exist", async () => {
    checkStoreById = { check: async () => false } as any;
    usecase = new UpdateStoreUsecase(updateStore, checkStoreById);

    let threw = false;
    try {
      await usecase.update({ id: "1" } as any);
    } catch (err: any) {
      threw = true;
      expect(err.message).toContain("Registro não encontrado");
    }

    expect(threw).toBe(true);
  });
});
