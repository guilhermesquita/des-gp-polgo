import { GetWinnerController } from "../../../../../features/winners/controllers/get-winners-pageable.controller";
import { GetWinnersPageable } from "../../../../../features/winners/domain/contracts/get-winners-pageable";
import { Validation } from "../../../../../config/contracts/validation";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("GetWinnerController", () => {
  let getWinners: GetWinnersPageable;
  let validation: Validation;
  let controller: GetWinnerController;

  beforeEach(() => {
    getWinners = {
      pageable: async (params: any) => ({
        data: [],
        total: 0,
        page: params.pageable.page,
        limit: params.pageable.limit,
      }),
    } as any;

    validation = {
      validate: (input: any) => undefined,
    };

    controller = new GetWinnerController(getWinners, validation);
  });

  it("should return pageable winners on success", async () => {
    const req: any = { query: { page: "2", limit: "5", order: "asc" } };
    const res: any = { json: jest.fn() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);

    expect(res.json).toHaveBeenCalledWith({
      data: [],
      total: 0,
      page: 2,
      limit: 5,
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should call next when validation fails", async () => {
    validation = { validate: (input: any) => ({ message: "err" } as any) };
    controller = new GetWinnerController(getWinners, validation);

    const req: any = { query: {} };
    const res: any = { json: jest.fn() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);

    expect(next).toHaveBeenCalled();
  });
});
