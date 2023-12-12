import Link from 'next/link';
import { ILink, subLinks } from './nav-list';

export const SubNav = () => {
  return (
    <div className="container mx-auto lg:flex gap-12 py-2 items-center justify-center md:px-10 px-4 text-white">
      {subLinks.map((link: ILink, idx: number) => {
        const { name, route, Icon } = link;
        return (
          <div
            key={idx}
            className={`pr-12 whitespace-nowrap font-medium ${
              subLinks.length !== idx + 1 && 'border-r border-white/50'
            } my-1`}
          >
            <Link href="/" className="flex gap-2 items-center duration-150 hover:opacity-100 opacity-50">
              {Icon && <Icon color="white" />}
              <span>{name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
