import { DeleteWinnerController } from "../../../../../features/winners/controllers/delete-winner.controller";
import { DeleteWinner } from "../../../../../features/winners/domain/contracts/delete-winner";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("DeleteWinnerController", () => {
  let deleteWinner: DeleteWinner;
  let controller: DeleteWinnerController;

  beforeEach(() => {
    deleteWinner = {
      delete: async (params: any) => ({ sucess: true, message: "ok" }),
    } as any;

    controller = new DeleteWinnerController(deleteWinner);
  });

  it("should return json on success", async () => {
    const req: any = { params: { id: "123" } };
    const res: any = { json: jest.fn(), status: jest.fn().mockReturnThis() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);

    expect(res.json).toHaveBeenCalledWith({ sucess: true, message: "ok" });
    expect(next).not.toHaveBeenCalled();
  });

  it("should return 404 when not found", async () => {
    deleteWinner = {
      delete: async () => ({ sucess: false, message: "not found" }),
    } as any;
    controller = new DeleteWinnerController(deleteWinner);

    const req: any = { params: { id: "123" } };
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
