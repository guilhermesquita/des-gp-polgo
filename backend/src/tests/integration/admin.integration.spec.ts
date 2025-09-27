import request from "supertest";
import app from "../../app";

jest.setTimeout(20000);

describe("Admin integration", () => {
  it("GET / should return ok", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });
});
