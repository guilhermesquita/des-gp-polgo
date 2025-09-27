import { describe, it, expect, beforeEach } from "@jest/globals";
import { DeleteStore } from "../../../../../../features/stores/domain/contracts/delete-store";
import { CheckStoreById } from "../../../../../../features/stores/domain/contracts/check-store-by-id";
import { DeleteStoreUsecase } from "../../../../../../features/stores/domain/usecase/delete-store.usecase";

describe("DeleteStore Usecase (unit)", () => {
  let deleteStore: DeleteStore;
  let checkStoreById: CheckStoreById;
  let usecase: DeleteStoreUsecase;

  beforeEach(() => {
    deleteStore = {
      delete: async (params: any) => ({ sucess: true, message: "ok" }),
    } as any;
    checkStoreById = { check: async (id: string) => true } as any;
    usecase = new DeleteStoreUsecase(deleteStore, checkStoreById);
  });

  it("should delete successfully when store exists", async () => {
    const result = await usecase.delete({ id: "1" } as any);
    expect(result.sucess).toBe(true);
  });

  it("should throw NotFoundError when store does not exist", async () => {
    checkStoreById = { check: async () => false } as any;
    usecase = new DeleteStoreUsecase(deleteStore, checkStoreById);

    let threw = false;
    try {
      await usecase.delete({ id: "1" } as any);
    } catch (err: any) {
      threw = true;
      expect(err.message).toContain("Registro não encontrado");
    }

    expect(threw).toBe(true);
  });
});
