import { describe, it, expect, beforeEach } from "@jest/globals";
import { AuthenticateAdmin } from "../../../../../../features/admin/domain/contracts/authenticate-admin";

describe("AuthenticateAdmin contract (unit)", () => {
  let auth: AuthenticateAdmin;

  beforeEach(() => {
    auth = {
      authenticate: async (params: AuthenticateAdmin.Params) => ({
        sucess: true,
        token: "t",
      }),
    } as any;
  });

  it("should return token on success", async () => {
    const res = await auth.authenticate({ email: "a@b", password: "p" });
    expect(res.sucess).toBe(true);
    expect(res.token).toBeDefined();
  });
});
