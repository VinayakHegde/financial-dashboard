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
        <p>RecentTransactions</p>
      </div>

      {/* Middle Column: Weekly Activity + Expense Stats */}
      <div className="flex flex-col desktop:flex-row justify-between gap-4">
        <p>WeeklyActivityChart </p>
        <p>ExpenseStatistics </p>
      </div>

      {/* Right Column: Quick Transfer + Balance History */}
      <div className="flex flex-col desktop:flex-row justify-between gap-4">
        <p>QuickTransfer </p>
        <p>BalanceHistoryChart </p>
      </div>
    </div>
  )
}