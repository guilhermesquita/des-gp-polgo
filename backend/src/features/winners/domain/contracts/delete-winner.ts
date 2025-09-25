export interface DeleteWinner {
  delete: (params: DeleteWinner.Params) => Promise<DeleteWinner.Result>;
}

export namespace DeleteWinner {
  export type Params = {
    id: string;
  };

  export type Result = {
    sucess: boolean;
    message: string;
  };
}
