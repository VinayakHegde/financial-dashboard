'use client';

import { ItemType, items } from './config';
import { usePathname, useRouter } from 'next/navigation';
import { Typography } from '../typography';
import { useSidebar } from './sidebar-context';
import dynamic from 'next/dynamic';

const Image = dynamic(
  () => import('@/components/image').then((mod) => mod.Image),
  { ssr: false },
);

export const SideBar = () => {
  const { isOpen, closeSidebar } = useSidebar();
  return (
    <aside
      className={`
          fixed z-30 top-0 bottom-0 flex-col min-w-64 bg-white border-r border-light-blue-gray
          transition-transform duration-300 transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          desktop:translate-x-0 desktop:flex desktop:top-[100px]
        `}
      aria-label="Sidebar Navigation"
    >
      <div
        className="flex desktop:hidden border-r border-light-blue-gray gap-2 items-center p-5 pl-8"
        aria-hidden="true"
      >
        <Typography type="body" size="custom-25" weight="x-bold">
          Soar Task
        </Typography>
        <button
          type="button"
          onClick={closeSidebar}
          className="ml-auto"
          aria-label="Close Sidebar"
        >
          <Image src="/close.svg" alt="" aria-hidden="true" tabIndex={-1} />
        </button>
      </div>
      <ul className="flex flex-col" role="list">
        {items.map((item) => (
          <Item key={item.title} {...item} />
        ))}
      </ul>
    </aside>
  );
};

const Item = ({ icon, title, href, enabled }: ItemType) => {
  const pathname = usePathname();
  const router = useRouter();
  const { closeSidebar } = useSidebar();

  const isActive = pathname === href;

  const handleClick = () => {
    if (enabled) {
      router.push(href);
      closeSidebar();
    }
  };

  return (
    <li role="listitem">
      <button
        onClick={handleClick}
        aria-disabled={!enabled}
        aria-current={isActive ? 'page' : undefined}
        className={`flex items-center gap-8 p-4 pl-8 capitalize w-full ${
          enabled
            ? 'hover:bg-gray-100'
            : 'cursor-not-allowed pointer-events-none'
        } relative ${
          isActive
            ? 'before:content[" "] before:h-full before:w-3 before:bg-dark-gray before:absolute before:-left-1 before:rounded-r-10'
            : ''
        }`}
      >
        <Image
          src={`/${icon}${isActive ? '-dark' : ''}.svg`}
          alt=""
          aria-hidden="true"
          tabIndex={-1}
        />
        <Typography
          type="body"
          size="custom-17"
          weight="medium"
          color={isActive ? 'dark-gray' : 'medium-gray'}
        >
          {title}
        </Typography>
      </button>
    </li>
  );
};
