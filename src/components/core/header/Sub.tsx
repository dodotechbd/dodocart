import { CameraBold, ComputerBold, HeadPhoneBold, PhoneBold, SmartWatchBold } from '@components/icons';
import { GamingBold } from '@components/icons/Gaming';
import Link from 'next/link';
// type LinkNav = {
//   name: string;
//   icon: any;
// };

export const Sub = () => {
  // const navLink: LinkNav[] = [
  //   { name: 'phone', icon: <Cart /> },
  //   { name: 'phone', icon: <Cart /> },
  //   { name: 'phone', icon: <Cart /> },
  //   { name: 'phone', icon: <Cart /> },
  //   { name: 'phone', icon: <Cart /> },
  //   { name: 'phone', icon: <Cart /> },
  // ];
  return (
    <div className="lg:flex  gap-4 py-2 container mx-auto items-center justify-between lg:px-20 px-4 bg-[#2E2E2E] text-white text-white">
      <div className="flex gap-2 border-r-2 items-center ">
        <PhoneBold color="#989898" />
        <Link href="/">
          <label className="mr-20">Phones</label>
        </Link>
      </div>
      <div className="flex border-r-2 gap-2">
        <ComputerBold color="#989898" />
        <label className="mr-20">Computers</label>
      </div>
      <div className="flex border-r-2 gap-2">
        <SmartWatchBold color="#989898" />
        <label className="mr-20">Smart Watches</label>
      </div>
      <div className="flex border-r-2 gap-2">
        <CameraBold color="#989898" />
        <label className="mr-20">Cameras</label>
      </div>
      <div className="flex border-r-2 gap-2">
        <HeadPhoneBold color="#989898" />
        <label className="mr-20">Headphones</label>
      </div>
      <div className="flex gap-2">
        <GamingBold className="w-6" color="#989898" />
        <label>Gaming</label>
      </div>

      {/* {navLink.map((nav) => (
        <div key={nav.name}>
          <Link href="/" className="flex">
            <p>{nav.icon}</p>
            <label>{nav.name}</label>
          </Link>
        </div>
      ))} */}
    </div>
  );
};
