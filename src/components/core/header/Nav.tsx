import { Burger, Cart, Favorite, Logo, Search, User } from '@components/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SubNav } from './SubNav';
import { ILink, links } from './nav-list';

export const Nav = () => {
  const router = useRouter();
  const { route } = router;
  return (
    <header>
      <div className="flex items-center lg:justify-start justify-between gap-8 container mx-auto md:px-10 px-4 lg:py-4 py-6">
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
        <ul className="lg:flex hidden gap-12 whitespace-nowrap">
          {links.map((link: ILink, idx: number) => (
            <li key={idx}>
              <Link
                href={link.route}
                className={`font-medium ${link.route === route ? 'opacity-100' : 'opacity-30 hover:opacity-100'}`}
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
        <button className="lg:hidden">
          <Burger size={40} fill="#080341" />
        </button>
      </div>
      <div className="bg-[#2E2E2E]">
        <SubNav />
      </div>
    </header>
  );
};
