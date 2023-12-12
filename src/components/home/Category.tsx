import { ILink, subLinks } from '@components/core';
import { Arrow } from '@components/icons';
import Link from 'next/link';

export function Category() {
  return (
    <div className="lg:px-40 lg:py-20 px-4 py-16 container mx-auto">
      <div className="flex items-center justify-between lg:mb-8 mb-12">
        <h1 className="font-medium text-2xl">Browse By Category</h1>
        <div className="flex gap-4">
          <button>
            <Arrow />
          </button>
          <button className="rotate-180">
            <Arrow />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {subLinks.map((link: ILink, idx: number) => {
          const { IconLight, name, route } = link;
          return (
            <Link
              href={route}
              key={idx}
              className="flex flex-col duration-300 justify-center items-center text-black bg-[#EDEDED] py-6 hover:text-[#EDEDED] hover:bg-black px-12 rounded-2xl gap-2 w-40 h-32"
            >
              {IconLight && <IconLight color="currentColor" />}
              <p className="font-medium whitespace-nowrap">{name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
