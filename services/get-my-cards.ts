import { GET } from '@/app/api/cards/route';
import { toCanonical } from './to-canonical';

export type Card = {
  id: number;
  cardNumber: number;
  cardholderName: string;
  balance: number;
  expires: string;
  category: 'credit' | 'debit';
};

export const getMyCards = async () => {
  const response = await GET();
  return toCanonical<Card[]>(await response.json());
};
