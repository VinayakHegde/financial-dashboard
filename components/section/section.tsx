"use client"

import Link from 'next/link'
import { Typography } from '../typography'

export const Section = ({
  title,
  children,
  link,
}: {
  title: string,
  children: React.ReactNode,
  link?: {
    href: string,
    label: string,
  },
}) => {
  return (
    <section className='flex flex-col gap-6 w-screen desktop:w-fit overflow-hidden'>
      <div className="flex justify-between items-center px-6 desktop:px-0">
        <Typography type='heading-2'>{title}</Typography>
        {link && (
          <Link href={link.href}>
            <Typography type='body' size='custom-17'>
              {link.label}
            </Typography>
          </Link>
        )}
      </div>
      {children}
    </section>
  )
}