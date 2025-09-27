import { UpdateWinnerController } from "../../../../../features/winners/controllers/update-winner.controller";
import { UpdateWinner } from "../../../../../features/winners/domain/contracts/update-winner";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("UpdateWinnerController", () => {
  let updateWinner: UpdateWinner;
  let controller: UpdateWinnerController;

  beforeEach(() => {
    updateWinner = {
      update: async (params: any) => ({ sucess: true, message: "ok" }),
    } as any;

    controller = new UpdateWinnerController(updateWinner);
  });

  it("should return json on success", async () => {
    const req: any = { params: { id: "123" }, body: { nome: "A" } };
    const res: any = { json: jest.fn(), status: jest.fn().mockReturnThis() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);

    expect(res.json).toHaveBeenCalledWith({ sucess: true, message: "ok" });
    expect(next).not.toHaveBeenCalled();
  });

  it("should return 404 when not found", async () => {
    updateWinner = {
      update: async () => ({ sucess: false, message: "not found" }),
    } as any;
    controller = new UpdateWinnerController(updateWinner);

    const req: any = { params: { id: "123" }, body: {} };
    const res: any = { json: jest.fn(), status: jest.fn().mockReturnThis() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      sucess: false,
      message: "not found",
    });
  });
});
