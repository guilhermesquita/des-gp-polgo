export interface CreateStore {
  create: (params: CreateStore.Params) => Promise<CreateStore.Result>;
}

export namespace CreateStore {
  export type Params = {
    nome: string;
    cnpj: string;
    estado: string;
    cidade: string;
    endereco: string;
  };

  export type Result = {
    sucess: boolean;
    message: string;
    data?: any;
  };
}
