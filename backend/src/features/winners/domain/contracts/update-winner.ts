export interface UpdateWinner {
  update: (params: UpdateWinner.Params) => Promise<UpdateWinner.Result>;
}

export namespace UpdateWinner {
  export type Params = {
    id: string;
    nome?: string;
    estado?: string;
    cidade?: string;
    premio?: string;
    data?: Date;
  };

  export type Result = {
    sucess: boolean;
    message: string;
  };
}
