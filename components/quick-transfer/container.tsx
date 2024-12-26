"use client"

import { Contact } from '@/services/get-contacts'
import { Section } from '../section'
import { TransferTo } from './transfer-to'
import { Transfer } from './transfer'
import { Image } from '../image'
import Link from 'next/link'

type Props = {
  contacts: Contact[]
}

export const QuickTransfer = ({ contacts }: Props) => {
  return (
    <Section title="Quick Transfer"
      className="desktop:!w-[450px]">
      <ul className='flex items-center justify-between'>
        {
          contacts.slice(0, 3).map(contact => (
            <TransferTo key={contact.id} contact={contact} />
          ))
        }
        <li>
          <Link href="/transfer" className="bg-white shadow-[4px_4px_18px_-2px_#E7E4E8CC] flex items-center h-[40px] w-[40px] desktop:h-[50px] desktop:w-[50px] rounded-full overflow-hidden flex items-center justify-center">
          <Image src='/chevron-right.svg' alt='Chevron Right' className='!h-5 !w-[6px]' />
          </Link>
        </li>
      </ul>

      <Transfer amount={500} />
    </Section >
  )
}