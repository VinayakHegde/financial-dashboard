'use client';

import { Card, CardType } from './card';
import { Section } from '../section';

export const MyCards = ({ cards }: { cards: CardType[] }) => {
  return (
    <Section
      title="My Cards"
      link={{
        href: '/cards',
        label: 'View all',
      }}
      transparent
      className="desktop:!w-730px"
      aria-label="My Cards Section"
    >
      <div
        className="flex gap-8 overflow-x-auto px-6 py-2 desktop:p-0"
        role="list"
      >
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </Section>
  );
};
