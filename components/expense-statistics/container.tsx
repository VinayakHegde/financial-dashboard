'use client';

import { Section } from '../section';
import { ExpenseStatisticsPie } from './expense-statistics-pie';
import { ComponentProps } from 'react';

export const ExpenseStatistics = (
  props: ComponentProps<typeof ExpenseStatisticsPie>,
) => {
  return (
    <Section
      title="Expense Statistics"
      className="desktop:!w-350px"
      aria-label="Expense Statistics Section"
    >
      <ExpenseStatisticsPie {...props} />
    </Section>
  );
};
