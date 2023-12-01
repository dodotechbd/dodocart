/* eslint-disable prettier/prettier */
import { Cart, Love, Profile } from '@components/icons';
import Link from 'next/link';
import { useState } from 'react';

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { name: 'Home', Link: '/' },
    { name: 'About', link: '/' },
    { name: 'Contact Us', link: '/' },
    { name: 'Blog', link: '/product' },
  ];
  return (
    <header className="mb-20">
      <div className="w-full fixed top-0 left-0 shadow-md">
        <div className="lg:flex items-center justify-between bg-white py-4 lg:px-20 px-10">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800 gap-3">
            <Link href="/">dodoTack</Link>
          </div>
          <label>
            <input name="myInput" type="text" className="bg-gray-100 p-3 px-10 h-2/4 rounded " placeholder="search" />
          </label>

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
                className="lg:ml-8 lg:my-0 my-7 text-xl  cursor-pointer hover:border-b-2 duration-500 hover:text-blue-400 "
              >
                {link.name}{' '}
              </li>
            ))}
            {/* difrent way for nav  */}
            {/* <li className="lg:ml-8 lg:my-0 my-7 text-xl  cursor-pointer hover:border-b-2 duration-500 hover:text-blue-400 ">
              <Link href="/">Home</Link>
            </li>
            <li className="lg:ml-8 lg:my-0 my-7 text-xl  cursor-pointer hover:border-b-2 duration-500 hover:text-blue-400 ">
              <Link href="/about">About Us</Link>
            </li> */}

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
