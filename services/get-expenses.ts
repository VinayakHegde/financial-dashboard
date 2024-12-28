import { GET } from '@/app/api/expenses/route';
import { toCanonical } from './to-canonical';

export type Expense = {
  category: string;
  value: number;
};

export const getExpenses = async () => {
  const response = await GET();
  return toCanonical<Expense[]>(await response.json());
};
