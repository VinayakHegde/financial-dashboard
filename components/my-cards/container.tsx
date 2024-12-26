"use client"

import Link from 'next/link'
import { Typography } from '../typography'
import { Card, CardType } from './card'


export const MyCards = ({ cards }: { cards: CardType[] }) => {
  return (
    <section className='flex flex-col gap-6 w-screen desktop:w-fit overflow-hidden'>
      <div className="flex justify-between items-center px-6 desktop:px-0">
        <Typography type='heading-2'>My Cards</Typography>
        <Link href="/cards">
          <Typography type='body' size='custom-17'>
            View all
          </Typography>
        </Link>
      </div>
      <div className="flex gap-6 overflow-x-auto px-6 py-2 desktop:p-0">
        {cards.slice(0, 2).map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}