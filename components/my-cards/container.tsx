"use client"

import Link from 'next/link'
import { Typography } from '../typography'
import { Card, CardType } from './card'


export const MyCards = ({ cards }: { cards: CardType[] }) => {
  return (
    <section className='flex flex-col gap-6'>
      <div className="flex justify-between items-center">
        <Typography type='heading-2'>My Cards</Typography>
        <Link href="/cards">
          <Typography type='body' size='custom-17'>
            View all
          </Typography>
        </Link>
      </div>
      <div className="flex gap-6">
        {cards.slice(0, 2).map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}