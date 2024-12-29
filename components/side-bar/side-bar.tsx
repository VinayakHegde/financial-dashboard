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
          desktop:translate-x-0  desktop:flex desktop:top-[100px]
        `}
    >
      <div className="flex  desktop:hidden border-r border-light-blue-gray gap-2 items-center p-5 pl-8">
        <Typography type="body" size="custom-25" weight="x-bold">
          Soar Task
        </Typography>
        <button type="button" onClick={closeSidebar} className="ml-auto">
          <Image src="/close.svg" alt="close" />
        </button>
      </div>
      {items.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </aside>
  );
};

const Item = ({ icon, title, href, enabled }: ItemType) => {
  const pathname = usePathname();
  const router = useRouter();
  const { closeSidebar } = useSidebar();

  const handleClick = () => {
    router.push(href);
    closeSidebar();
  };

  return (
    <button
      onClick={handleClick}
      aria-disabled={!enabled}
      className={`flex items-center gap-8 p-4 pl-8 capitalize ${enabled ? 'hover:bg-gray-100' : 'cursor-not-allowed pointer-events-none'} relative ${pathname === href ? 'before:content[" "] before:h-full before:w-3 before:bg-dark-gray before:absolute before:-left-1 before:rounded-r-10' : ''}`}
    >
      <Image
        src={`/${icon}${pathname === href ? '-dark' : ''}.svg`}
        alt={title}
      />
      <Typography
        type="body"
        size="custom-17"
        weight="medium"
        color={pathname === href ? 'dark-gray' : 'medium-gray'}
      >
        {title}
      </Typography>
    </button>
  );
};
