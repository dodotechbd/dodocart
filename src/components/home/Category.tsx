import { ILink, subLinks } from '@components/core';
import { Arrow } from '@components/icons';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function Category() {
  const [scrollPosition, setScrollPosition] = useState(0); // Adjust this value as needed
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [scrollPosition]); // Update the effect to run when scrollPosition changes

  const handleScroll = (direction: 'left' | 'right') => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const scrollAmount = 180; // Adjust this value as needed
      if (direction === 'left') {
        if (scrollPosition > 0) {
          if (scrollPosition > scrollAmount) {
            setScrollPosition((prevPosition) => prevPosition - scrollAmount);
          } else {
            setScrollPosition((prevPosition) => prevPosition - scrollPosition);
          }
        }
      } else {
        if (scrollContainer.offsetWidth <= 1150) {
          const max = 1150 - scrollContainer.offsetWidth;
          if (max > 180) {
            if (scrollPosition <= max) {
              if (max - scrollPosition > 180) {
                setScrollPosition((prevPosition) => prevPosition + scrollAmount);
              } else {
                setScrollPosition((prevPosition) => prevPosition + max - scrollPosition);
              }
            }
          }
        }
      }
    }
  };

  return (
    <div className="lg:px-40 lg:py-20 px-4 py-16 container mx-auto">
      <div className="flex items-center justify-between lg:mb-8 mb-12">
        <h1 className="font-medium text-2xl">Browse By Category</h1>
        <div className="flex gap-4">
          <button onClick={() => handleScroll('left')}>
            <Arrow />
          </button>
          <button onClick={() => handleScroll('right')} className="rotate-180">
            <Arrow />
          </button>
        </div>
      </div>
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex justify-between right-0 relative flex-nowrap overflow-x-scroll gap-8 scroll-smooth"
        >
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
    </div>
  );
}
