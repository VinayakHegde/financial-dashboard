'use client';

import { Expense } from '@/services/get-expenses';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

type Props = {
  expenses: Expense[];
};

const FILLS = ['fill-orange', 'fill-navy-blue', 'fill-info', 'fill-dark-gray'];

const RADIAN = Math.PI / 180;
const CustomizedLabel = (props: IGeneric.UnknownProps) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent, payload } =
    props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={'middle'}
      dominantBaseline="central"
      className="text-13 desktop:text-15 font-bold"
      aria-hidden="true"
      tabIndex={-1}
      focusable="false"
    >
      <tspan x={x} dy="-0.6em">{`${(percent * 100).toFixed(0)}%`}</tspan>
      <tspan x={x} dy="1.2em">
        {payload.category}
      </tspan>
    </text>
  );
};

export const ExpenseStatisticsPie = ({ expenses }: Props) => {
  return (
    <div className="h-275px desktop:h-325px w-full">
      <ResponsiveContainer>
        <PieChart className="pointer-events-none" tabIndex={-1}>
          <Pie
            data={expenses}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={CustomizedLabel}
            outerRadius={130}
            innerRadius={3}
            dataKey="value"
            fill="#8884d8"
            paddingAngle={5}
            cornerRadius={1}
            className="pointer-events-none focus:outline-none"
            tabIndex={-1}
          >
            {expenses.map((_, idx) => (
              <Cell
                key={`cell-${idx}`}
                className={FILLS[idx % FILLS.length]}
                aria-hidden="true"
                tabIndex={-1}
                focusable="false"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
