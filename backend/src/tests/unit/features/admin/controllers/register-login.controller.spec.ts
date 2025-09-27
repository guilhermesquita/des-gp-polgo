import { RegisterAdminController } from "../../../../../features/admin/controllers/register-admin.controller";
import { LoginAdminController } from "../../../../../features/admin/controllers/login-admin.controller";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("Admin controllers (unit)", () => {
  it("Register should return json on success and 400 on failed create", async () => {
    const createAdmin: any = {
      create: async (p: any) => ({ sucess: true, message: "ok" }),
    };
    const controller = new RegisterAdminController(createAdmin);
    const req: any = { body: { email: "a@b", password: "p" } };
    const res: any = { json: jest.fn(), status: jest.fn().mockReturnThis() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);
    expect(res.json).toHaveBeenCalled();

    const createAdminFail: any = {
      create: async (p: any) => ({ sucess: false, message: "err" }),
    };
    const controllerFail = new RegisterAdminController(createAdminFail);
    const res2: any = { json: jest.fn(), status: jest.fn().mockReturnThis() };

    await controllerFail.handle(req, res2, next as any);
    expect(res2.status).toHaveBeenCalledWith(400);
  });

  it("Login should return json on success and 401 on failed auth", async () => {
    const auth: any = {
      authenticate: async (p: any) => ({ sucess: true, token: "t" }),
    };
    const controller = new LoginAdminController(auth);
    const req: any = { body: { email: "a@b", password: "p" } };
    const res: any = { json: jest.fn(), status: jest.fn().mockReturnThis() };
    const next = jest.fn();

    await controller.handle(req, res, next as any);
    expect(res.json).toHaveBeenCalled();

    const authFail: any = {
      authenticate: async (p: any) => ({ sucess: false, message: "err" }),
    };
    const controllerFail = new LoginAdminController(authFail);
    const res2: any = { json: jest.fn(), status: jest.fn().mockReturnThis() };

    await controllerFail.handle(req, res2, next as any);
    expect(res2.status).toHaveBeenCalledWith(401);
  });
});
