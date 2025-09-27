import { IStore } from "../model/store.model";

export interface GetStores {
  pageable: (params: GetStores.Params) => Promise<GetStores.Result>;
}

export namespace GetStores {
  export type Params = {
    pageable: Pageable;
    filters: Filters;
  };

  export type Pageable = {
    page?: number;
    limit?: number;
    order?: string;
  };

  export type Filters = {
    nome?: string;
    estado?: string;
    cidade?: string;
    cnpj?: string;
  };

  export type Result = {
    data: IStore[];
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
