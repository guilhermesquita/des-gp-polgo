export interface UpdateStore {
  update: (params: UpdateStore.Params) => Promise<UpdateStore.Result>;
}

export namespace UpdateStore {
  export type Params = {
    id: string;
    nome?: string;
    cnpj?: string;
    estado?: string;
    cidade?: string;
    endereco?: string;
    location?: { lat: number; lng: number };
  };

  export type Result = {
    sucess: boolean;
    message: string;
  };
}
