import { CreateAdminUsecase } from "../../../../../features/admin/domain/usecase/create-admin.usecase";
import { AuthenticateAdminUsecase } from "../../../../../features/admin/domain/usecase/authenticate-admin.usecase";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("Admin usecases (unit)", () => {
  it("CreateAdminUsecase should delegate to createAdmin", async () => {
    const createAdmin: any = { create: async (p: any) => ({ sucess: true }) };
    const usecase = new CreateAdminUsecase(createAdmin);
    const res = await usecase.create({ email: "a@b", password: "p" });
    expect(res.sucess).toBe(true);
  });

  it("AuthenticateAdminUsecase should delegate to authenticateAdmin", async () => {
    const auth: any = {
      authenticate: async (p: any) => ({ sucess: true, token: "t" }),
    };
    const usecase = new AuthenticateAdminUsecase(auth);
    const res = await usecase.authenticate({ email: "a@b", password: "p" });
    expect(res.sucess).toBe(true);
    expect(res.token).toBe("t");
  });
});
