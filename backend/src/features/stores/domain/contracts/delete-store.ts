export interface DeleteStore {
  delete: (params: DeleteStore.Params) => Promise<DeleteStore.Result>;
}

export namespace DeleteStore {
  export type Params = { id: string };

  export type Result = { sucess: boolean; message: string };
}
