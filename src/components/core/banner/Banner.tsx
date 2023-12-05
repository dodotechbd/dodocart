import Image from 'next/image';
import { Button } from '../buttons';

export const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#211C24] to-[#211C24] ... container mx-auto max-h-[600px] overflow-hidden ">
      <div className="flex items-center justify-between lg:px-40 ">
        <div className="text-white">
          <p>Pro.Beyond.</p>
          <h1 className="lg:text-8xl">
            IPhone 14 <span className="font-semibold">Pro</span>
          </h1>
          <span>Created to change everything for the better. For everyone</span>
          <Button className="py-4 mt-6 px-14 text-white border-white">Shop Now</Button>
        </div>
        <div className="mt-16">
          <Image width={250} height={600} src="/images/phone.png" alt="banner" />
        </div>
      </div>
    </div>
  );
};
