import { Button } from '@components/core';
import Image from 'next/image';

export const BannerTwo = () => {
  return (
    <div className="bg-gradient-to-r h-112 from-[#2E2E2E] to-[#000000]">
      <div className="h-full flex flex-col items-center justify-center  mx-auto text-white relative overflow-hidden">
        <h1 className="text-7xl font-extralight tracking-tight">
          Big Summer <span className="font-medium ">Sale</span>
        </h1>
        <p className="text-[#787878] leading-10">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <Button light className="text-[#FFFFFF] mt-10 mx-auto" small>
          Shop Now
        </Button>
        <Image
          width={400}
          height={400}
          src="/images/laptop.png"
          alt="image"
          className="absolute w-80 left-56 -top-56"
        />
        <Image width={400} height={400} src="/images/pc.png" alt="image" className="absolute w-60 left-10 top-1 z-10" />
        <Image
          width={400}
          height={400}
          src="/images/tablet.png"
          alt="image-2"
          className="absolute w-104 -left-20 top-44 scale-x-[-1]"
        />
        <Image
          height={400}
          width={400}
          src="/images/i-phone.png"
          alt="phone"
          className="absolute w-30 -rotate-31 top-0 -right-6"
        />
        <Image
          height={400}
          width={400}
          src="/images/watch.png"
          alt="watch"
          className="absolute w-101 -bottom-28 -right-2"
        />
      </div>
    </div>
  );
};
