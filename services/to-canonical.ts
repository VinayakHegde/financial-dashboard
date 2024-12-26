export const toCanonical = async <T>(transactions: unknown): Promise<T> => {
  return transactions as T;
}
