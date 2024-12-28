'use client';

import { Image } from './image';

export default function Search() {
  return (
    <div className="bg-gray-500 gap-4 p-4 items-center rounded-full overflow-hidden flex">
      <Image src="/search.svg" alt="search" />
      <input
        className="bg-transparent outline-none text-blue-100"
        placeholder="Search for something"
      />
    </div>
  );
}
