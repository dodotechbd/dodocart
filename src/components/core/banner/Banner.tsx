import Image from 'next/image';
import { Button } from '../buttons';

export const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#211C24] to-[#211C24] container mx-auto max-h-[600px] overflow-hidden">
      <div className="flex  justify-between lg:px-40 mt-32">
        <div className=" text-white leading-loose mt-16	">
          <p className="opacity-40 font-semibold">Pro.Beyond.</p>
          <h1 className="lg:text-8xl font-extralight">
            IPhone 14 <span className="font-semibold">Pro</span>
          </h1>
          <span className="opacity-40 leading-6">Created to change everything for the better. For everyone</span>
          <Button className="py-4 mt-6 px-14 text-white border-white">Shop Now</Button>
        </div>
        <div className="">
          <Image width={350} height={600} src="/images/phone.png" alt="banner" />
        </div>
      </div>
    </div>
  );
};
