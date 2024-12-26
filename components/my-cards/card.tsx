"use client"

import { Typography } from '../typography'
import { toCurrency } from '@/utils/to-currency'
import { Image } from '../image'

export type CardType = {
  id: number
  cardNumber: string
  cardholderName: string
  balance: number
  expires: string
  category: 'credit' | 'debit'
}

export const Card = (props: CardType) => {
  const isCreditCard = props.category === 'credit';
  return (
    <div className={`border rounded-[25px] w-[350px] h-fit ${isCreditCard ? 'bg-dark-card text-white' : 'bg-white border-blue-50'}  flex flex-col justify-between`}>
      <div className="px-8 py-6 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <Typography isSecondaryFont type='body' size='xs' weight='medium' color={isCreditCard ? 'inherit' : 'blue-300'}>Balance</Typography>
            <Typography isSecondaryFont type='body' size='lg' weight='semibold' color='inherit'>{toCurrency(props.balance)}</Typography>
          </div>
          <Image src={`/chip-${isCreditCard ? 'light' : 'dark'}.svg`} alt="Chip" className="!w-8 !h-8" />
        </div>
        <div className="flex gap-10 items-center">
          <div>
            <Typography isSecondaryFont uppercase type='body' size='xs' weight='medium' color={isCreditCard ? 'inherit' : 'blue-300'}>Card Holder</Typography>
            <Typography isSecondaryFont type='body' size='lg' weight='semibold' color='inherit'>{props.cardholderName}</Typography>
          </div>
          <div>
            <Typography isSecondaryFont uppercase type='body' size='xs' weight='medium' color={isCreditCard ? 'inherit' : 'blue-300'}>Valid Thru</Typography>
            <Typography isSecondaryFont type='body' size='lg' weight='semibold' color='inherit'>{props.expires}</Typography>
          </div>
        </div>
      </div>

      <div className={`${isCreditCard ? 'bg-dark-card-number' : 'border-t border-t-blue-50'} p-8 flex items-center justify-between`}>
        <Typography isSecondaryFont type='body' size='custom-22' weight='semibold' color='inherit'>{props.cardNumber}</Typography>
        <Image src={`/card-vendor-${isCreditCard ? 'light' : 'dark'}.svg`} alt="Card Vendor" className='!w-[44px] !h-[30px]' />
      </div>
    </div>
  )
}