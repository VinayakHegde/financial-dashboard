type XAxisTickProps = {
  x: number;
  y: number;
  value: string;
  textAnchor?: 'start' | 'middle' | 'end';
};

export const XAxisTick: React.FC<XAxisTickProps> = ({
  x,
  y,
  value,
  textAnchor = 'middle',
}) => (
  <text
    x={x}
    y={y + 15}
    textAnchor={textAnchor}
    className="fill-steel-blue text-sm font-normal font-primary"
    aria-hidden="true"
    tabIndex={-1}
    focusable="false"
  >
    {value}
  </text>
);