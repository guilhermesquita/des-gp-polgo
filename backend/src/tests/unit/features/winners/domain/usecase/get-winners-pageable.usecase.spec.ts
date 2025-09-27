import { GetWinnersPageable } from "../../../../../../features/winners/domain/contracts/get-winners-pageable";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("GetWinnersPageable Usecase (unit)", () => {
  let getWinners: GetWinnersPageable;

  beforeEach(() => {
    getWinners = {
      pageable: async (
        params: GetWinnersPageable.Params
      ): Promise<GetWinnersPageable.Result> => {
        const items = [
          {
            nome: "A",
            estado: "SP",
            cidade: "Sao Paulo",
            premio: "X",
            data: new Date(),
          },
        ];
        return {
          sucess: true,
          data: items as any,
          pagination: {
            page: params.pageable.page || 1,
            limit: params.pageable.limit || 10,
            total: 1,
            totalPages: 1,
          },
          message: "Dados recuperados com sucesso",
        };
      },
    };
  });

  it("should return pageable winners data", async () => {
    const params: GetWinnersPageable.Params = {
      pageable: { page: 1, limit: 10, order: "ASC" },
      filters: {},
    };

    const result = await getWinners.pageable(params);

    expect(result.sucess).toBe(true);
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.pagination.page).toBe(1);
  });
});
