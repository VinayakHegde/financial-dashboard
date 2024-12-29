'use client';

import dynamic from 'next/dynamic';

const Image = dynamic(() => import('@/components/image').then(mod => mod.Image), { ssr: false });

export default function Search() {
  return (
    <div className="bg-ghost-white gap-4 p-4 items-center rounded-full overflow-hidden flex">
      <Image src="/search.svg" alt="search" />
      <input
        className="bg-transparent outline-none text-sky-blue"
        placeholder="Search for something"
      />
    </div>
  );
}
