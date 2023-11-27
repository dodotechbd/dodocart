import { Cart, Love, Profile } from '@components/icons';
import { useState } from 'react';

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { name: 'HOME', link: '/' },
    { name: 'SERVICE', link: '/' },
    { name: 'ABOUT', link: '/' },
    { name: 'CONTACT', link: '/' },
  ];
  return (
    <header>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="lg:flex items-center justify-between bg-white py-4 lg:px-10 px-10">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800 gap-3">
            <span className="text-3xl text-indigo-600">
              <i className="fa-solid fa-headphones"></i>
            </span>
            dodoTack
          </div>

          <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-5 cursor-pointer lg:hidden">
            {open ? <Love /> : <Love />}
          </div>

          <ul
            className={`lg:flex md:items-center md:pb-3 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? 'top-18 opacity-100' : 'top-[-490px] lg:opacity-100 opacity-0'
            }`}
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="lg:ml-8 lg:my-0 my-7 text-xl cursor-pointer hover:border-b-2 duration-500 hover:text-blue-400 "
              >
                {link.name}{' '}
              </li>
            ))}
            <div className="flex gap-5 ml-2">
              <Love />
              <Cart />
              <Profile />
            </div>
            {/* <Button>GET STARTED</Button> */}
          </ul>
        </div>
      </div>
    </header>
  );
};
