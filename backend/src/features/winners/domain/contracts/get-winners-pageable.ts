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
    orderBy: string;
    order: string;
  };

  export type Filters = {
    nome?: string;
    estado?: string;
    premio?: string;
  };

  export type Result = {
    items: IWinner[];
    totalPages: number;
    totalItems: number;
    orderBy: string;
    order: string;
  };
}
