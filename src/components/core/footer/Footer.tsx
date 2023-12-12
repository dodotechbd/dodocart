import { Logo, Phone } from '@components/icons';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-black mt-5 text-white text-base lg:px-40 lg:py-24">
      <div className="flex flex-row">
        <div className="basis-1/2">
          <Link href="/">
            <Logo color="white" width="138" height="32" />
          </Link>
          <p className="text-[#CFCFCF] mt-6 lg:pr-20 pr-2">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>
        </div>
        <div className="basis-1/4">
          <h1 className="font-semibold">Services</h1>
          <ul className="text-[#CFCFCF] text-sm leading-8 font-light">
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>
        <div className="basis-1/4">
          <h1 className="font-semibold">Assistance to the buyer</h1>
          <ul className="text-[#CFCFCF] text-sm leading-8 font-light">
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return fo goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <Phone color="white" />
        <Phone color="white" />
        <Phone color="white" />
        <Phone color="white" />
      </div>
      <p>&copy; 2023 DodoCart. All rights reserved.</p>
    </footer>
  );
};
