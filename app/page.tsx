

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <p>MyCards</p>
        <p>RecentTransactions</p>
      </div>

      {/* Middle Column: Weekly Activity + Expense Stats */}
      <div className="flex justify-between">
        <p>WeeklyActivityChart </p>
        <p>ExpenseStatistics </p>
      </div>

      {/* Right Column: Quick Transfer + Balance History */}
      <div className="flex justify-between">
        <p>QuickTransfer </p>
        <p>BalanceHistoryChart </p>
      </div>
    </div>
  )
}