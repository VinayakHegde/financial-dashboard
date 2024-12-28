'use client';

import { Section } from '../section';
import BalanceHistoryChart from './balance-history-chart';
import { ComponentProps } from 'react';

export const BalanceHistory = (
  props: ComponentProps<typeof BalanceHistoryChart>,
) => {
  return (
    <Section title="Balance History" className="desktop:!w-[635px]">
      <BalanceHistoryChart {...props} />
    </Section>
  );
};
