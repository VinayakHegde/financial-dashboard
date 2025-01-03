'use client';

import { Transaction } from '@/services/get-transactions';
import { Typography } from '../typography';
import { toCurrency } from '@/utils/to-currency';
import { toLocaleDate } from '@/utils/date';
import dynamic from 'next/dynamic';

const Image = dynamic(
  () => import('@/components/image').then((mod) => mod.Image),
  { ssr: false },
);

type Props = {
  transaction: Transaction;
};

const getTextColor = (type: Transaction['type']) => {
  if (type === 'credit') return 'text-success';
  return 'text-danger';
};

const getBackgroundColor = (logo?: Transaction['logo']) => {
  if (logo === 'cards') return 'bg-light-warning p-4';
  if (logo === 'paypal') return 'bg-light-info p-4';
  if (logo === 'dollar') return 'bg-light-success p-4';
  return 'bg-ghost-white p-8';
};

export const RecentTransaction = ({ transaction }: Props) => {
  return (
    <div
      className="flex items-center gap-4"
      role="listitem"
      aria-label={`Transaction ${transaction.description}`}
    >
      <div
        className={`${getBackgroundColor(transaction.logo)} flex items-center rounded-full overflow-hidden`}
        aria-hidden="true"
      >
        {transaction.logo && <Image src={`/${transaction.logo}.svg`} alt="" />}
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <Typography type="body" size="md" weight="medium" color="dark-gray">
          {transaction.description}
        </Typography>
        <Typography
          type="body"
          size="custom-15"
          weight="normal"
          color="steel-blue"
          aria-label={`Date ${toLocaleDate(transaction.date)}`}
        >
          {toLocaleDate(transaction.date)}
        </Typography>
      </div>
      <div
        className={getTextColor(transaction.type)}
        aria-label={`Amount ${toCurrency(transaction.amount)}`}
      >
        <Typography type="body" size="md" weight="medium" color="inherit">
          {toCurrency(transaction.amount)}
        </Typography>
      </div>
    </div>
  );
};
