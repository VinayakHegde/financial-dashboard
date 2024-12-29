'use client';

import Link from 'next/link';
import { Typography } from '../typography';

export const Section = ({
  title,
  children,
  link,
  transparent,
  className,
}: {
  title: string;
  children: React.ReactNode;
  link?: {
    href: string;
    label: string;
  };
  transparent?: boolean;
  className?: string;
}) => {
  const element = transparent ? (
    children
  ) : (
    <div
      className="flex flex-col gap-6 overflow-x-auto px-6 py-2 desktop:p-7 desktop:rounded-25 desktop:bg-white"
      role="group"
      aria-label={title}
    >
      {children}
    </div>
  );
  return (
    <section
      className={`flex flex-col gap-6 w-screen desktop:w-fit overflow-hidden ${className}`}
      role="region"
      aria-label={title}
    >
      <div className="flex justify-between items-center px-6 desktop:px-0">
        <Typography type="heading-2">{title}</Typography>
        {link && (
          <Link
            href={link.href}
            className="hover:underline text-dark-gray hover:text-steel-blue"
            aria-label={link.label}
          >
            <Typography type="body" size="custom-17" color="inherit">
              {link.label}
            </Typography>
          </Link>
        )}
      </div>
      {element}
    </section>
  );
};
