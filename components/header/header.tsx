'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Typography } from '../typography';
import { Search } from '../search';
import { useUserContext } from '../user-context';
import { appUser } from '@/utils/app-user';
import { useSidebar } from '../side-bar';
import dynamic from 'next/dynamic';

const Image = dynamic(
  () => import('@/components/image').then((mod) => mod.Image),
  { ssr: false },
);

const TITLE: Record<string, string> = {
  '/': 'Overview',
  '/setting': 'Setting',
};

export const Header = () => {
  const pathname = usePathname();
  const user = useUserContext();
  const { toggleSidebar } = useSidebar();
  const title = TITLE[pathname] ?? 'Not Found';

  return (
    <header
      className="desktop:fixed desktop:left-0 desktop:right-0 z-10 bg-white shadow-md flex flex-col desktop:flex-row"
      role="banner"
    >
      <div
        className="min-w-64 hidden desktop:flex border-r border-light-blue-gray gap-2 items-center p-5 pl-8"
        aria-hidden="true"
      >
        <Image src="/task.svg" alt="task" height={35} width={35} />
        <Typography type="body" size="custom-25" weight="x-bold">
          Soar Task
        </Typography>
      </div>

      <div className="flex flex-1 items-center justify-between p-5">
        <button
          type="button"
          onClick={toggleSidebar}
          className="flex items-center overflow-hidden desktop:hidden"
          aria-label="Toggle Sidebar"
        >
          <Image src="/hamburger.svg" alt="hamburger" />
        </button>
        <Typography type="heading-1">{title}</Typography>
        <div className="desktop:flex-1 justify-end flex desktop:space-x-4">
          <div className="hidden desktop:block">
            <Search />
          </div>
          <Link href="/setting" aria-label="Settings">
            <div className="bg-ghost-white flex items-center p-4 rounded-full overflow-hidden hidden desktop:block">
              <Image src="/settings-blue.svg" alt="" aria-hidden="true" />
            </div>
          </Link>

          <button
            type="button"
            className="bg-ghost-white flex items-center p-4 rounded-full overflow-hidden hidden desktop:block"
            aria-label="Notifications"
          >
            <Image src="/notification.svg" alt="" aria-hidden="true" />
          </button>
          <Image
            src={`${user.profile?.displayPicture ?? appUser(60)}`}
            alt="app-user"
            isAvatar
            className="hidden desktop:block"
            width={60}
            height={60}
          />
          <Image
            src={`${user.profile?.displayPicture ?? appUser(35)}`}
            alt="app-user"
            isAvatar
            className="desktop:hidden"
            width={35}
            height={35}
          />
        </div>
      </div>
      <div className="desktop:hidden py-4 px-5 w-full">
        <Search />
      </div>
    </header>
  );
};
