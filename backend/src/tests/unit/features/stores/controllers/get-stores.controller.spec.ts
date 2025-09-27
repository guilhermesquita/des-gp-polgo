import { GetStoresController } from "../../../../../features/stores/controllers/get-stores.controller";
import { GetStores } from "../../../../../features/stores/domain/contracts/get-stores";
import { Validation } from "../../../../../config/contracts/validation";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("GetStoresController", () => {
  let getStores: GetStores;
  let validation: Validation;
  let controller: GetStoresController;

  beforeEach(() => {
    getStores = {
      pageable: async (params: any) => ({
        data: [],
        pagination: {
          totalPages: 0,
          total: 0,
          page: params.pageable.page || 1,
          limit: params.pageable.limit || 10,
        },
        sucess: true,
        message: "ok",
      }),
    } as any;
    validation = { validate: (input: any) => undefined } as any;
    controller = new GetStoresController(getStores, validation);
  });

  it("should return json on success", async () => {
    const req: any = { query: { page: "1", limit: "10" } };
    const res: any = { json: jest.fn() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);

    expect(res.json).toHaveBeenCalled();
  });

  it("should call next when validation fails", async () => {
    validation = {
      validate: (input: any) => ({ message: "err" } as any),
    } as any;
    controller = new GetStoresController(getStores, validation);

    const req: any = { query: {} };
    const res: any = { json: jest.fn() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);

    expect(next).toHaveBeenCalled();
  });
});
