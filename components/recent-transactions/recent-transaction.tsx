'use client';

import { Transaction } from '@/services/get-transactions';
import { Image } from '../image';
import { Typography } from '../typography';
import { toCurrency } from '@/utils/to-currency';
import { toLocaleDate } from '@/utils/date';

type Props = {
  transaction: Transaction;
};

const getTextColor = (type: Transaction['type']) => {
  if (type === 'credit') return 'text-success';
  return 'text-danger';
};

const getBackgroundColor = (logo?: Transaction['logo']) => {
  if (logo === 'cards') return 'bg-warning-100 p-4';
  if (logo === 'paypal') return 'bg-info-100 p-4';
  if (logo === 'dollar') return 'bg-success-100 p-4';
  return 'bg-gray-500 p-8';
};

export const RecentTransaction = ({ transaction }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`${getBackgroundColor(transaction.logo)} flex items-center rounded-full overflow-hidden`}
      >
        {transaction.logo && (
          <Image src={`/${transaction.logo}.svg`} alt={transaction.logo} />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <Typography type="body" size="md" weight="medium" color="gray-1000">
          {transaction.description}
        </Typography>
        <Typography
          type="body"
          size="custom-15"
          weight="normal"
          color="blue-200"
        >
          {toLocaleDate(transaction.date)}
        </Typography>
      </div>
      <div className={getTextColor(transaction.type)}>
        <Typography type="body" size="md" weight="medium" color="inherit">
          {toCurrency(transaction.amount)}
        </Typography>
      </div>
    </div>
  );
};
