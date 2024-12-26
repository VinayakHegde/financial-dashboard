"use client"

import { Typography } from '../typography'
import { toCurrency } from '@/utils/to-currency'
import { Image } from '../image'
import { maskNumber } from '@/utils/mask-number'

export type CardType = {
  id: number
  cardNumber: number
  cardholderName: string
  balance: number
  expires: string
  category: 'credit' | 'debit'
}

export const Card = (props: CardType) => {
  const isCreditCard = props.category === 'credit';
  return (
    <div className={`border rounded-[25px] min-w-[265px] desktop:min-w-[350px] min-h-[170px] desktop:min-h-[235px] ${isCreditCard ? 'bg-dark-card text-white' : 'bg-white border-blue-50'}  flex flex-col justify-between`}>
      <div className="px-8 pt-6 flex flex-col gap-4 desktop:gap-6">
        <div className="flex justify-between items-center">
          <div className='hidden desktop:block'>
            <Typography isSecondaryFont type='body' size='xs' weight='medium' color={isCreditCard ? 'inherit' : 'blue-300'}>Balance</Typography>
            <Typography isSecondaryFont type='body' size='lg' weight='semibold' color='inherit'>{toCurrency(props.balance)}</Typography>
          </div>
          <div className='desktop:hidden'>
            <Typography isSecondaryFont type='body' size='xxs' weight='medium' color={isCreditCard ? 'inherit' : 'blue-300'}>Balance</Typography>
            <Typography isSecondaryFont type='body' size='custom-13' weight='semibold' color='inherit'>{toCurrency(props.balance)}</Typography>
          </div>
          <Image src={`/chip-${isCreditCard ? 'light' : 'dark'}.svg`} alt="Chip" className="!w-8 !h-8" />
        </div>
        <div className="flex gap-10 items-center">
          <div className='hidden desktop:block'>
            <Typography isSecondaryFont uppercase type='body' size='xs' weight='medium' color={isCreditCard ? 'inherit' : 'blue-300'}>Card Holder</Typography>
            <Typography isSecondaryFont type='body' size='lg' weight='semibold' color='inherit'>{props.cardholderName}</Typography>
          </div>

          <div className='desktop:hidden'>
            <Typography isSecondaryFont uppercase type='body' size='xxs' weight='medium' color={isCreditCard ? 'inherit' : 'blue-300'}>Card Holder</Typography>
            <Typography isSecondaryFont type='body' size='custom-13' weight='semibold' color='inherit'>{props.cardholderName}</Typography>
          </div>
          <div className='hidden desktop:block'>
            <Typography isSecondaryFont uppercase type='body' size='xs' weight='medium' color={isCreditCard ? 'inherit' : 'blue-300'}>Valid Thru</Typography>
            <Typography isSecondaryFont type='body' size='lg' weight='semibold' color='inherit'>{props.expires}</Typography>
          </div>

          <div className='desktop:hidden'>
            <Typography isSecondaryFont uppercase type='body' size='xxs' weight='medium' color={isCreditCard ? 'inherit' : 'blue-300'}>Valid Thru</Typography>
            <Typography isSecondaryFont type='body' size='custom-13' weight='semibold' color='inherit'>{props.expires}</Typography>
          </div>
        </div>
      </div>

      <div className={`${isCreditCard ? 'bg-dark-card-number' : 'border-t border-t-blue-50'}  min-h-[50px] desktop:min-h-[70px] px-8 desktop:py-5 flex items-center justify-between`}>
        <div className='hidden desktop:block'>
          <Typography isSecondaryFont type='body' size='custom-22' weight='semibold' color='inherit'>{maskNumber(props.cardNumber)}</Typography>
        </div>
        <div className='desktop:hidden'>
          <Typography isSecondaryFont type='body' size='custom-15' weight='semibold' color='inherit'>{maskNumber(props.cardNumber)}</Typography>
        </div>
        <Image src={`/card-vendor-${isCreditCard ? 'light' : 'dark'}.svg`} alt="Card Vendor" className='desktop:!w-[44px] desktop:!h-[30px] !w-[27px] !h-[18px]' />
      </div>
    </div>
  )
}