export const XAxisTick = ({
  x,
  y,
  value,
  textAnchor = 'middle',
}: {
  x: number;
  y: number;
  value: string;
  textAnchor?: 'start' | 'middle' | 'end';
}) => (
  <text
    x={x}
    y={y + 15}
    textAnchor={textAnchor}
    className="fill-steel-blue text-sm font-normal font-primary"
  >
    {value}
  </text>
);
