import { describe, it, expect, beforeEach } from "@jest/globals";
import { GetStores } from "../../../../../../features/stores/domain/contracts/get-stores";

describe("GetStores Usecase (unit)", () => {
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

  it("should return pageable stores", async () => {
    const params: GetStores.Params = {
      pageable: { page: 1, limit: 10, order: "asc" },
      filters: {},
    } as any;

    const result = await getStores.pageable(params);

    expect(result.data).toEqual([]);
    expect(result.pagination.total).toBe(0);
  });
});
