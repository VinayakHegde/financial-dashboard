'use client';

import dynamic from 'next/dynamic';

const Image = dynamic(
  () => import('@/components/image').then((mod) => mod.Image),
  { ssr: false },
);

export const Search = () => {
  return (
    <div className="bg-ghost-white gap-4 p-4 items-center rounded-full overflow-hidden flex">
      <Image src="/search.svg" alt="" aria-hidden="true" tabIndex={-1} />
      <input
        className="bg-transparent outline-none text-sky-blue"
        placeholder="Search for something"
        type="search"
        aria-label="Search for something"
      />
    </div>
  );
};
