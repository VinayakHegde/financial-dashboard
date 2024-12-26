export const XAxisTick = ({ x, y, value, textAnchor = 'middle' }: {
  x: number;
  y: number;
  value: string;
  textAnchor?: 'start' | 'middle' | 'end';
}) => (
  <text x={x} y={y + 15} textAnchor={textAnchor} className='fill-blue-200 text-sm font-normal font-inter' >
    {value}
  </text>
);