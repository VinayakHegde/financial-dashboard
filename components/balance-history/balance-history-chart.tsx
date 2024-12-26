"use client"

import { BalanceRecord } from '@/services/get-balance-history'
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts'

type Props = {
  balanceHistory: BalanceRecord[]
}


const CustomXAxisTick = ({ x, y, payload }: any) => {
  const { value, index } = payload;
  if (index === 7) return null;
  return (
    <text x={x} y={y + 15} textAnchor="start" className='fill-blue-200 text-sm font-normal font-inter' >
      {value}
    </text>
  );
};

const CustomYAxisTick = ({ x, y, payload }: any) => (
  <text x={x - 10} y={y} textAnchor="end" dy={3} className='fill-blue-200 text-sm font-normal font-inter'>
    {payload.value}
  </text>
);

export default function BalanceHistoryChart({ balanceHistory }: Props) {

  return (
    <div style={{ width: '100%', height: 275 }}>
      <ResponsiveContainer>
        <AreaChart data={balanceHistory.slice(0, 8)}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2D60FF" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#2D60FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="month"
            tick={<CustomXAxisTick />}
          />
          <YAxis tick={<CustomYAxisTick />} />
          <Tooltip />
          <Area type="monotone" dataKey="balance" stroke="#1814F3"
            fill="url(#colorBalance)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}