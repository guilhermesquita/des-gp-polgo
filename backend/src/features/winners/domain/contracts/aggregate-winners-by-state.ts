export interface AggregateWinnersByState {
  aggregate: () => Promise<AggregateWinnersByState.Result>;
}

export namespace AggregateWinnersByState {
  export type Item = {
    estado: string;
    total: number;
  };

  export type Result = {
    sucess: boolean;
    data: Item[];
    message: string;
  };
}
