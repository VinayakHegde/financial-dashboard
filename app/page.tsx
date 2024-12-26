import { MyCards } from "@/components/my-cards";
import { getMyCards } from "@/services/get-my-cards";


export default async function DashboardPage() {
  const [cards] = await Promise.all([
    getMyCards()
  ])
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col desktop:flex-row justify-between gap-4">
        <MyCards cards={cards}/>
        {/* <RecentTransactions /> */}
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