"use client"

import { Transaction } from '@/services/get-transactions'
import { Section } from '../section'
import { RecentTransaction } from './recent-transaction'

type Props = {
  transactions: Transaction[]
}
export const RecentTransactions = (props: Props) => {
  return (
    <Section title="Recent Transactions">
      <div className="flex flex-col gap-6 overflow-x-auto px-6 py-2 desktop:p-7 desktop:rounded-[25px] desktop:bg-white">
        {props.transactions.slice(0, 3).map((transaction, index) => (
          <RecentTransaction key={index} transaction={transaction} />
        ))}
      </div>
    </Section>
  )
}