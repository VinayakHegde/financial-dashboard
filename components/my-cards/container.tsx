"use client"

import Link from 'next/link'
import { Typography } from '../typography'
import { Card, CardType } from './card'
import { Section } from '../section'


export const MyCards = ({ cards }: { cards: CardType[] }) => {
  return (
    <Section title="My Cards" link={{
      href: '/cards',
      label: 'View all',
    }}>
      <div className="flex gap-6 overflow-x-auto px-6 py-2 desktop:p-0">
        {cards.slice(0, 2).map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </Section>
  )
}