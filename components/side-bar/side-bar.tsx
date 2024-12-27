'use client';

import Link from "next/link";
import { ItemType, items } from "./config";
import { usePathname } from "next/navigation";
import { Image } from "../image";
import { Typography } from "../typography";

export const SideBar = () => {
  return (
    <aside className="flex flex-col min-w-64 hidden desktop:flex bg-white border-r border-gray-900">
      {items.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </aside>
  );
};

const Item = ({ icon, title, href, enabled }: ItemType) => {
  const pathname = usePathname();

  return (
    <Link href={href} aria-disabled={!enabled} className={`flex items-center gap-8 p-4 pl-8 capitalize ${enabled ? 'hover:bg-gray-100' : 'cursor-not-allowed pointer-events-none'} relative ${pathname === href ? 'before:content[" "] before:h-full before:w-3 before:bg-gray-1000 before:absolute before:-left-1 before:rounded-r-[10px]' : ''}`}>
      <Image src={`/${icon}${pathname === href ? '-dark' : ''}.svg`} alt={title} />
      <Typography type='body' size='custom-17' weight='medium' color={pathname === href ? 'gray-1000' : 'gray-300'}>{title}</Typography>
    </Link>
  );
}