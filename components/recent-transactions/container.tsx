"use client"

import { Transaction } from '@/services/get-transactions'
import { Section } from '../section'
import { RecentTransaction } from './recent-transaction'

type Props = {
  transactions: Transaction[]
}
export const RecentTransactions = (props: Props) => {
  return (
    <Section
      title="Recent Transactions"
      className='desktop:!w-[350px]'
    >
      <div className='flex flex-col gap-2 desktop:max-h-[235px]'>
        {props.transactions.slice(0, 3).map((transaction, index) => (
          <RecentTransaction key={index} transaction={transaction} />
        ))}
      </div>
    </Section>
  )
}