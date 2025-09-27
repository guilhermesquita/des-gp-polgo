import { UpdateStore } from "../../../../../../features/stores/domain/contracts/update-store";
import { DeleteStore } from "../../../../../../features/stores/domain/contracts/delete-store";
import { CheckStoreById } from "../../../../../../features/stores/domain/contracts/check-store-by-id";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("Update/Delete/Check Store contracts (unit)", () => {
  let updateStore: UpdateStore;
  let deleteStore: DeleteStore;
  let checkStoreById: CheckStoreById;

  beforeEach(() => {
    updateStore = {
      update: async (params: UpdateStore.Params) => ({
        sucess: true,
        message: "ok",
      }),
    } as any;
    deleteStore = {
      delete: async (params: DeleteStore.Params) => ({
        sucess: true,
        message: "ok",
      }),
    } as any;
    checkStoreById = { check: async (id: string) => true } as any;
  });

  it("update should return sucess", async () => {
    const res = await updateStore.update({ id: "1", nome: "L" });
    expect(res.sucess).toBe(true);
  });

  it("delete should return sucess", async () => {
    const res = await deleteStore.delete({ id: "1" });
    expect(res.sucess).toBe(true);
  });

  it("check should return boolean", async () => {
    const exists = await checkStoreById.check("1");
    expect(typeof exists).toBe("boolean");
  });
});
