import { CreateStoreController } from "../../../../../features/stores/controllers/create-store.controller";
import { CreateStore } from "../../../../../features/stores/domain/contracts/create-store";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("CreateStoreController", () => {
  let createStore: CreateStore;
  let controller: CreateStoreController;

  beforeEach(() => {
    createStore = {
      create: async (params: any) => ({
        sucess: true,
        message: "ok",
        data: params,
      }),
    } as any;
    controller = new CreateStoreController(createStore);
  });

  it("should return json on success", async () => {
    const req: any = {
      body: { nome: "L", cnpj: "1", estado: "SP", cidade: "C", endereco: "R" },
    };
    const res: any = { json: jest.fn() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);

    expect(res.json).toHaveBeenCalledWith({
      sucess: true,
      message: "ok",
      data: req.body,
    });
  });
});
