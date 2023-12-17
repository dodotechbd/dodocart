import { Facebook, Instagram, Logo, Tiktok, Twitter } from '@components/icons';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto lg:px-40 lg:py-24 px-8 py-12 flex flex-col gap-8">
        <div className="flex md:flex-row flex-col gap-8 text-center lg:text-start">
          <div className="basis-2/5">
            <Link href="/">
              <Logo className="mx-auto lg:mx-0" color="white" width="138" height="32" />
            </Link>
            <p className="text-[#CFCFCF] text-sm font-medium mt-6">
              We are a residential interior design firm located in Portland. Our boutique-studio offers more than
            </p>
          </div>
          <div className="basis-3/5 flex lg:flex-row flex-col gap-8 justify-end">
            <div className="min-w-72">
              <h1 className="font-semibold mb-2">Services</h1>
              <ul className="text-[#CFCFCF] text-sm leading-8 font-light">
                <li className="hover:underline">
                  <Link href="#">Bonus program</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Gift cards</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Credit and payment</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Service contracts</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Non-cash account</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Payment</Link>
                </li>
              </ul>
            </div>
            <div className="min-w-72">
              <h1 className="font-semibold">Assistance to the buyer</h1>
              <ul className="text-[#CFCFCF] text-sm leading-8 font-light">
                <li className="hover:underline">
                  <Link href="#">Find an order</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Terms of delivery</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Exchange and return fo goods</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Guarantee</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Frequently asked questions</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Terms of use of the site</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-9 justify-center lg:justify-start">
          <Link href="#">
            <Twitter />
          </Link>
          <Link href="#">
            <Facebook />
          </Link>
          <Link href="#">
            <Tiktok />
          </Link>
          <Link href="#">
            <Instagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};
