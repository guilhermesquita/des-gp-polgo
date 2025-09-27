export interface CreateAdmin {
  create: (params: CreateAdmin.Params) => Promise<CreateAdmin.Result>;
}

export namespace CreateAdmin {
  export type Params = {
    email: string;
    password: string;
  };

  export type Result = {
    sucess: boolean;
    message: string;
  };
}
