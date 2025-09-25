export interface CreateWinner {
  create: (params: CreateWinner.Params) => Promise<CreateWinner.Result>;
}

export namespace CreateWinner {
  export type Params = {
    nome: string;
    estado: string;
    cidade: string;
    premio: string;
    data: Date;
  };

  export type Result = {
    sucess: boolean;
    message: string;
  };
}
