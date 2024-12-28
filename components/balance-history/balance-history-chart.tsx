'use client';

import { BalanceRecord } from '@/services/get-balance-history';
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { XAxisTick, YAxisTick } from '../axis-tick';

type Props = {
  balanceHistory: BalanceRecord[];
};

const CustomXAxisTick = ({ x, y, payload }: IGeneric.UnknownProps) => {
  const { value, index } = payload;
  if (index === 7) return null;
  return <XAxisTick x={x} y={y} value={value} textAnchor="start" />;
};

const CustomYAxisTick = ({ x, y, payload }: IGeneric.UnknownProps) => (
  <YAxisTick x={x} y={y} value={payload.value} />
);

export default function BalanceHistoryChart({ balanceHistory }: Props) {
  return (
    <div className="h-275px w-full">
      <ResponsiveContainer>
        <AreaChart data={balanceHistory.slice(0, 8)}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2D60FF" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#2D60FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" tick={<CustomXAxisTick />} />
          <YAxis tick={<CustomYAxisTick />} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#1814F3"
            fill="url(#colorBalance)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
