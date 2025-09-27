import { CreateWinnerController } from "../../../../../features/winners/controllers/create-winner.controller";
import { CreateWinner } from "../../../../../features/winners/domain/contracts/create-winner";
import { Validation } from "../../../../../config/contracts/validation";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("CreateWinnerController", () => {
  let createWinner: CreateWinner;
  let validation: Validation;
  let controller: CreateWinnerController;

  beforeEach(() => {
    createWinner = {
      create: async (
        params: CreateWinner.Params
      ): Promise<CreateWinner.Result> => ({ sucess: true, message: "ok" }),
    };

    validation = {
      validate: (input: any) => undefined,
    };

    controller = new CreateWinnerController(createWinner, validation);
  });

  it("should call res.json on success", async () => {
    const req: any = {
      body: {
        nome: "A",
        estado: "SP",
        cidade: "S",
        premio: "P",
        data: new Date(),
      },
    };
    const res: any = { json: jest.fn() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);

    expect(res.json).toHaveBeenCalledWith({ sucess: true, message: "ok" });
    expect(next).not.toHaveBeenCalled();
  });

  it("should call next when validation fails", async () => {
    validation = { validate: (input: any) => ({ message: "err" } as any) };
    controller = new CreateWinnerController(createWinner, validation);

    const req: any = { body: { nome: "" } };
    const res: any = { json: jest.fn() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);

    expect(next).toHaveBeenCalled();
  });
});
