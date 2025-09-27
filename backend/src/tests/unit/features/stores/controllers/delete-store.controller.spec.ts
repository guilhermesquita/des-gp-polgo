import { DeleteStoreController } from "../../../../../features/stores/controllers/delete-store.controller";
import { DeleteStore } from "../../../../../features/stores/domain/contracts/delete-store";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("DeleteStoreController", () => {
  let deleteStore: DeleteStore;
  let controller: DeleteStoreController;

  beforeEach(() => {
    deleteStore = {
      delete: async (params: any) => ({ sucess: true, message: "ok" }),
    } as any;
    controller = new DeleteStoreController(deleteStore);
  });

  it("should return json on success", async () => {
    const req: any = { params: { id: "1" } };
    const res: any = { json: jest.fn() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);

    expect(res.json).toHaveBeenCalledWith({ sucess: true, message: "ok" });
  });
});
