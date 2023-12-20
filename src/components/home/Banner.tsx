import { Button } from '@components/core';
import { Figtree } from 'next/font/google';
import Image from 'next/image';

const figTree = Figtree({
  weight: '600',
  style: 'normal',
  subsets: ['latin'],
});

export const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#211C24] to-[#211C24]">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col items-center px-4 lg:px-40">
          <div className="w-full text-white text-center lg:text-start leading-loose lg:space-y-6 space-y-4 mt-20 lg:mt-0">
            <p className={'opacity-40 text-2xl font-semibold leading-8 ' + figTree.className}>Pro.Beyond.</p>
            <h1 className="lg:text-8xl text-7xl !leading-18">
              <span className="font-extralight">IPhone 14</span> <span className="font-semibold">Pro</span>
            </h1>
            <p className="opacity-40 font-medium text-lg lg:pb-0 pb-4">
              Created to change everything for the better. For everyone
            </p>
            <Button light className="mx-auto lg:mx-0">
              Shop Now
            </Button>
          </div>
          <div className="w-full max-h-96 lg:max-h-[34rem] lg:mt-20 mt-12 flex overflow-hidden justify-center lg:justify-end">
            <Image width={600} height={600} src="/images/phone.png" alt="banner" className="lg:w-96 h-max w-80" />
          </div>
        </div>
      </div>
    </div>
  );
};
