import { GET } from '@/app/api/balance-history/route';
import { toCanonical } from './to-canonical';
import { getMonth } from '@/utils/date';

export type BalanceRecord = {
  month: string;
  balance: number;
};

export const getBalanceHistory = async () => {
  const response = await GET();
  return toCanonical<BalanceRecord[]>(
    (await response.json()).map((record: IGeneric.UnknownProps) => ({
      ...record,
      month: getMonth(record.date),
    })),
  );
};
