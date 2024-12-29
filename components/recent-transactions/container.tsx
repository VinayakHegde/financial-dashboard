'use client';

import { Transaction } from '@/services/get-transactions';
import { Section } from '../section';
import { RecentTransaction } from './recent-transaction';

type Props = {
  transactions: Transaction[];
};
export const RecentTransactions = (props: Props) => {
  return (
    <Section
      title="Recent Transactions"
      className="desktop:!w-350px !max-h-290px overflow-y-auto pb-2"
      aria-label="Recent Transactions Section"
    >
      <div className="flex flex-col gap-2.5" role="list">
        {props.transactions.map((transaction) => (
          <RecentTransaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </Section>
  );
};
