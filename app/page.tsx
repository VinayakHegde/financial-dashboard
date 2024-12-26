import { ExpenseStatistics } from "@/components/expense-statistics";
import { MyCards } from "@/components/my-cards";
import { RecentTransactions } from "@/components/recent-transactions";
import { WeeklyActivity } from "@/components/weekly-activity";
import { getActiviries } from "@/services/get-activities";
import { getExpenses } from "@/services/get-expenses";
import { getMyCards } from "@/services/get-my-cards";
import { getTransactions } from "@/services/get-transactions";


export default async function DashboardPage() {
  const [cards, transactions, activities, expenses] = await Promise.all([
    getMyCards(),
    getTransactions(),
    getActiviries(),
    getExpenses(),
  ])
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col desktop:flex-row justify-between gap-8">
        <MyCards cards={cards} />
        <RecentTransactions transactions={transactions} />
      </div>

      <div className="flex flex-col desktop:flex-row justify-between gap-4">
        <WeeklyActivity activities={activities} />
        <ExpenseStatistics expenses={expenses} />
      </div>
      {/*

      <div className="flex flex-col desktop:flex-row justify-between gap-4">
        <QuickTransfer />
        <BalanceHistory />
      </div>
      */}
    </div>
  )
}