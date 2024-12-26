import { GET } from "@/app/api/transactions/route";
import { toCanonical } from "./to-canonical";

export type Transaction = {
  id: number
  type: 'credit' | 'debit'
  description: string
  date: string
  amount: number
  logo?: string
}

export const getTransactions = async () => {
  const response = await GET();
  return toCanonical<Transaction[]>(await response.json());
}