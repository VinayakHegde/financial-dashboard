/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Activity } from '@/services/get-activities';
import { toCurrency } from '@/utils/to-currency';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';
import { Typography } from '../typography';
import { XAxisTick, YAxisTick } from '../axis-tick';

const RoundedBar = (props: any) => {
  const { x, y, height, className } = props;
  return (
    <>
      <rect
        x={x}
        y={y}
        width={10}
        height={height}
        className={`${className} desktop:hidden`}
        rx={6}
        ry={6}
      />
      <rect
        x={x}
        y={y}
        width={15}
        height={height}
        className={`${className} hidden desktop:block`}
        rx={8}
        ry={8}
      />
    </>
  );
};

const CustomTooltip = (props: any) => {
  const { active, payload, label } = props as {
    active?: boolean;
    payload: { name: string; value: string }[];
    label: string;
  };
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 rounded-md shadow-md flex flex-col gap-2 pb-2 ">
        <div className="bg-gray-100 border-b border-b-blue-200 p-2">
          <Typography type="body" weight="semibold" size="md">
            {label}
          </Typography>
        </div>
        {payload.map((entry, index: number) => (
          <div
            key={`item-${index}`}
            className={`px-2 flex items-center ${entry.name === 'deposit' ? 'text-info' : 'text-gray-1000'}`}
          >
            <Typography
              type="body"
              weight="semibold"
              size="sm"
              color="inherit"
            >{`${entry.name}:`}</Typography>
            <Typography type="body" weight="semibold" size="sm" color="inherit">
              {toCurrency(Number(entry.value))}
            </Typography>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

const CustomLegend = (props: any) => {
  const { payload } = props as { payload: { value: string }[] };
  return (
    <div className="flex flex-row-reverse gap-4 justify-start items-center pb-5">
      {payload.map((entry, index: number) => (
        <div key={index} className="flex items-center gap-2 capitalize">
          <div
            className={`w-4 h-4 rounded-full ${entry.value === 'withdrawal' ? 'bg-gray-1000' : 'bg-info'}`}
          />
          <Typography
            type="body"
            weight="normal"
            size="custom-15"
            color="blue-200"
          >
            {entry.value}
          </Typography>
        </div>
      ))}
    </div>
  );
};

const CustomXAxisTick = ({ x, y, payload: { value } }: any) => (
  <XAxisTick x={x} y={y} value={value} />
);

const CustomYAxisTick = ({ x, y, payload }: any) => (
  <YAxisTick x={x} y={y} value={payload.value} />
);
export const WeeklyActivityChart = ({
  activities,
}: {
  activities: Activity[];
}) => {
  return (
    <div className="h-[254px] desktop:h-[325px] w-full">
      <ResponsiveContainer>
        <BarChart data={activities.slice(0, 7)} barGap={-5} maxBarSize={15}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="date" tick={<CustomXAxisTick />} />
          <YAxis tick={<CustomYAxisTick />} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            align="right"
            verticalAlign="top"
            layout="horizontal"
            content={<CustomLegend />}
          />
          <Bar
            dataKey="withdrawal"
            shape={<RoundedBar className="fill-gray-1000" />}
          />
          <Bar dataKey="deposit" shape={<RoundedBar className="fill-info" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
