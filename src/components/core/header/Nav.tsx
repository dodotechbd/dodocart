import { Burger, Cart, Logo, Love, Profile, Search } from '@components/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

type LinkType = {
  name: string;
  route: string;
};

export const Nav = () => {
  const router = useRouter();
  const { route } = router;
  const links: LinkType[] = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Contact Us', route: '/contactus' },
    { name: 'Blog', route: '/blog' },
  ];
  return (
    <header>
      <div className="flex items-center lg:justify-start justify-between gap-8 container mx-auto lg:px-20 px-4 lg:py-4 py-6">
        <Link href="/">
          <Logo width="138" height="32" />
        </Link>
        <div className="relative w-full lg:block hidden">
          <Search className="absolute top-1/2 -translate-y-1/2 left-4" stroke="#989898" size={24} />
          <input
            name="myInput"
            type="text"
            className="w-full p-4 text-sm outline-none rounded-lg bg-[#F5F5F5] pl-12"
            placeholder="Search"
          />
        </div>
        <ul className="lg:flex hidden gap-12 whitespace-nowrap">
          {links.map((link: LinkType, idx: number) => (
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
            <Love />
          </button>
          <button>
            <Cart />
          </button>
          <button>
            <Profile />
          </button>
        </div>
        <button className="lg:hidden">
          <Burger size={40} fill="#080341" />
        </button>
      </div>
    </header>
  );
};
