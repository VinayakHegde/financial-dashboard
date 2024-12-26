import { MyCards } from "@/components/my-cards";
import { RecentTransactions } from "@/components/recent-transactions";
import { getMyCards } from "@/services/get-my-cards";
import { getTransactions } from "@/services/get-transactions";


export default async function DashboardPage() {
  const [cards, transactions] = await Promise.all([
    getMyCards(),
    getTransactions()
  ])
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col desktop:flex-row justify-between gap-8">
        <MyCards cards={cards}/>
        <RecentTransactions transactions={transactions} />
      </div>

      {/* 
      <div className="flex flex-col desktop:flex-row justify-between gap-4">
        <WeeklyActivity />
        <ExpenseStatistics />
      </div>

      <div className="flex flex-col desktop:flex-row justify-between gap-4">
        <QuickTransfer />
        <BalanceHistory />
      </div> 
      */}
    </div>
  )
}