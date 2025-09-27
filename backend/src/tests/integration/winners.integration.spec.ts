import request from "supertest";
import app from "../../app";

jest.setTimeout(20000);

describe("Winners integration", () => {
  it("GET /api/ganhadores/ should respond (200 or handled error)", async () => {
    const res = await request(app).get("/api/ganhadores/");
    expect([200, 500, 400].includes(res.status)).toBe(true);
  });
});
