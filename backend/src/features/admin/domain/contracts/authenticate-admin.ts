export interface AuthenticateAdmin {
  authenticate: (
    params: AuthenticateAdmin.Params
  ) => Promise<AuthenticateAdmin.Result>;
}

export namespace AuthenticateAdmin {
  export type Params = {
    email: string;
    password: string;
  };

  export type Result = {
    sucess: boolean;
    token?: string;
    message?: string;
  };
}
