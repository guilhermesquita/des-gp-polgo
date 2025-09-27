import { GetStores } from "../../../../../../features/stores/domain/contracts/get-stores";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("GetStores contract (unit)", () => {
  let getStores: GetStores;

  beforeEach(() => {
    getStores = {
      pageable: async (
        params: GetStores.Params
      ): Promise<GetStores.Result> => ({
        data: [],
        pagination: {
          totalPages: 0,
          total: 0,
          page: params.pageable.page || 1,
          limit: params.pageable.limit || 10,
        },
        sucess: true,
        message: "ok",
      }),
    } as any;
  });

  it("should return pagination data", async () => {
    const result = await getStores.pageable({
      pageable: { page: 1, limit: 5, order: "asc" },
      filters: {},
    });
    expect(result.sucess).toBe(true);
    expect(result.pagination).toBeDefined();
  });
});
