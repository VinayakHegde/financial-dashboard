type YAxisTickProps = {
  x: number;
  y: number;
  value: string;
  textAnchor?: 'start' | 'middle' | 'end';
};

export const YAxisTick: React.FC<YAxisTickProps> = ({
  x,
  y,
  value,
  textAnchor = 'end',
}) => (
  <text
    x={x - 10}
    y={y}
    textAnchor={textAnchor}
    dy={3}
    className="fill-steel-blue text-sm font-normal font-primary"
    aria-hidden="true"
    tabIndex={-1}
    focusable="false"
  >
    {value}
  </text>
);