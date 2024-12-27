"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Typography } from './typography'
import { Image } from './image'
import Search from './search'

const TITLE: Record<string, string> = {
  '/': 'Overview',
  '/settings': 'Settings',
}
export default function Header() {
  const pathname = usePathname()
  const title = TITLE[pathname];

  return (
    <header className="bg-white shadow-md flex flex-col desktop:flex-row">
      <div className="min-w-64 hidden desktop:flex border-r border-gray-900 gap-2 items-center p-5 pl-8">
        <Image src="/task.svg" alt="task" className='!w-[35px] !h-[35px]'/>
        <Typography type='body' size='custom-25' weight='x-bold'>Soar Task</Typography>
      </div>

      <div className='flex flex-1 items-center  justify-between p-5'>
        <div className="flex items-center overflow-hidden desktop:hidden">
          <Image src="/hamburger.svg" alt="hamburger" />
        </div>
        <Typography type='heading-1'>{title}</Typography>
        <div className="desktop:flex-1 justify-end flex desktop:space-x-4">
          <div className="hidden desktop:block">
            <Search />
          </div>
          <Link
            href="/settings"
            className={`hover:text-primary ${pathname === '/settings' ? 'text-primary' : ''}`}
          >

            <div className="bg-gray-500 flex items-center p-4 rounded-full overflow-hidden hidden desktop:block">
              <Image src="/settings-blue.svg" alt="settings" />
            </div>
          </Link>

          <div className="bg-gray-500 flex items-center p-4 rounded-full overflow-hidden hidden desktop:block">
            <Image src="/notification.svg" alt="notification" />
          </div>
          <Image
            src="/app-user-60x60.jpg"
            alt="app-user"
            isAvatar
            className="hidden desktop:block"
            width="60px"
            height="60px" />
          <Image
            src="/app-user-35x35.jpg"
            alt="app-user"
            isAvatar
            className="desktop:hidden h-[35px] w-[35px]"
            width="35px"
            height="35px" />
        </div>
      </div>
      <div className="desktop:hidden py-4 px-5 w-full">
        <Search />
      </div>
    </header>
  )
}