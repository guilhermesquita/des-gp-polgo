import { IWinner } from "../model/winner.model";

export interface GetWinnersPageable {
  pageable: (
    params: GetWinnersPageable.Params
  ) => Promise<GetWinnersPageable.Result>;
}

export namespace GetWinnersPageable {
  export type Params = {
    pageable: Pageable;
    filters: Filters;
  };

  export type Pageable = {
    page?: number;
    limit?: number;
    order: string;
  };

  export type Filters = {
    nome?: string;
    estado?: string;
    premio?: string;
  };

  export type Result = {
    data: IWinner[];
    pagination: {
      totalPages: number;
      total: number;
      page: number;
      limit: number;
    };
    sucess: boolean;
    message: string;
  };
}
