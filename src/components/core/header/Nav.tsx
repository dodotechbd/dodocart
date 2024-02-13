import { Burger, Cart, Favorite, Logo, Search, User } from '@components/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubNav } from './SubNav';
import { ILink, links } from './nav-list';

export const Nav = () => {
  const router = useRouter();
  const { route } = router;
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white text-black ">
      <div className="lg:flex flex-row items-center lg:justify-start justify-between gap-8 container mx-auto md:px-10 px-4 lg:py-4 py-6">
        <Link href="/">
          <Logo width="138" height="32" />
        </Link>
        <div className="relative w-full lg:block hidden">
          <Search className="absolute top-1/2 -translate-y-1/2 left-4" color="#989898" size={24} />
          <input
            name="myInput"
            type="text"
            className="w-full p-4 text-sm outline-none rounded-lg bg-[#F5F5F5] pl-12"
            placeholder="Search"
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="lg:hidden absolute right-8 z-20 top-5 cursor-pointer text-3xl text-red-700"
        >
          {open ? (
            <button>
              <p>X</p>
            </button>
          ) : (
            <button>
              <Burger size={40} fill="#080341" />
            </button>
          )}
        </div>
        <ul
          className={`lg:flex  lg:gap-12 md:relative absolute left-0 whitespace-nowrap mx-auto  ${
            open ? 'opacity-100 text-black bg-white w-[382px] duration-700 scale-y-150' : 'lg:opacity-100 opacity-0  '
          }`}
        >
          {links.map((link: ILink, idx: number) => (
            <li key={idx} className="p-2 m-2  rounded-md text-center w-full ">
              <Link
                href={link.route}
                className={`font-medium ${link.route === route ? 'opacity-100 z-10' : 'opacity-30 hover:opacity-100'}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:flex hidden gap-6">
          <button>
            <Favorite />
          </button>
          <button>
            <Cart />
          </button>
          <button>
            <User />
          </button>
        </div>
      </div>
      <div className="bg-[#2E2E2E]">
        <SubNav />
      </div>
    </header>
  );
};
