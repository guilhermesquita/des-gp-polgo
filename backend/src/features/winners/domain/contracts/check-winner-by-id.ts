export interface CheckWinnerById {
  check: (id: string) => Promise<boolean>;
}
