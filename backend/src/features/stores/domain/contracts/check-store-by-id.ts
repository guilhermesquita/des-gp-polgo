export interface CheckStoreById {
  check: (id: string) => Promise<boolean>;
}
