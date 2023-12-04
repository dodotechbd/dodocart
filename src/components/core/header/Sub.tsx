import { Cart, Love } from '@components/icons';
import Link from 'next/link';

export const Sub = () => {
  return (
    <div className="lg:flex  gap-4 py-2 container mx-auto items-center justify-between lg:px-20 px-4 bg-[#2E2E2E] text-white text-base">
      <div className="flex gap-2 border-r-2 items-center ">
        <Cart className="text-[#2E2E2E]" />
        <Link href="/">
          <label className="mr-20">Phones</label>
        </Link>
      </div>
      <div className="flex border-r-2">
        <Love />
        <label className="mr-20">Computers</label>
      </div>
      <div className="flex border-r-2">
        <Love />
        <label className="mr-20">Smart Watches</label>
      </div>
      <div className="flex border-r-2">
        <Love />
        <label className="mr-20">Cameras</label>
      </div>
      <div className="flex border-r-2">
        <Love />
        <label className="mr-20">Headphones</label>
      </div>
      <div className="flex">
        <Love />
        <label>geming</label>
      </div>
    </div>
  );
};
