import { UpdateStoreController } from "../../../../../features/stores/controllers/update-store.controller";
import { UpdateStore } from "../../../../../features/stores/domain/contracts/update-store";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("UpdateStoreController", () => {
  let updateStore: UpdateStore;
  let controller: UpdateStoreController;

  beforeEach(() => {
    updateStore = {
      update: async (params: any) => ({ sucess: true, message: "ok" }),
    } as any;
    controller = new UpdateStoreController(updateStore);
  });

  it("should return json on success", async () => {
    const req: any = { params: { id: "1" }, body: { nome: "L" } };
    const res: any = { json: jest.fn() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);

    expect(res.json).toHaveBeenCalledWith({ sucess: true, message: "ok" });
  });
});
