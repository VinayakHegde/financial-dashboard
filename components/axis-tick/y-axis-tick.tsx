export const YAxisTick = ({
  x,
  y,
  value,
  textAnchor = 'end',
}: {
  x: number;
  y: number;
  value: string;
  textAnchor?: 'start' | 'middle' | 'end';
}) => (
  <text
    x={x - 10}
    y={y}
    textAnchor={textAnchor}
    dy={3}
    className="fill-blue-200 text-sm font-normal font-primary"
  >
    {value}
  </text>
);
