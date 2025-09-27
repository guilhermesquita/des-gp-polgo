import { CreateAdmin } from "../../../../../features/admin/domain/contracts/create-admin";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("CreateAdmin contract (unit)", () => {
  let createAdmin: CreateAdmin;

  beforeEach(() => {
    createAdmin = {
      create: async (
        params: CreateAdmin.Params
      ): Promise<CreateAdmin.Result> => ({ sucess: true, message: "ok" }),
    } as any;
  });

  it("should return sucess on create", async () => {
    const res = await createAdmin.create({ email: "a@b", password: "p" });
    expect(res.sucess).toBe(true);
  });
});
