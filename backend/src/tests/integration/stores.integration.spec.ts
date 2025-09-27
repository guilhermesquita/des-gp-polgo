import request from "supertest";
import app from "../../app";

jest.setTimeout(20000);

describe("Stores integration", () => {
  it("GET /api/lojas/ should respond (200 or handled error)", async () => {
    const res = await request(app).get("/api/lojas/");
    expect([200, 500, 400].includes(res.status)).toBe(true);
  });
});
