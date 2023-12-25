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
          className="absolute lg:w-80 w-24 lg:left-56 left-14 lg:-top-56 -top-10 rotate-[80deg]"
        />
        <Image
          width={400}
          height={400}
          src="/images/pc.png"
          alt="image"
          className="absolute lg:w-60 w-36 lg:left-10 lg:top-1 -left-24 -top-4 z-10"
        />
        <Image
          width={400}
          height={400}
          src="/images/tablet.png"
          alt="image-2"
          className="absolute lg:w-104 lg:-left-20 -left-14 lg:top-44 top-96 scale-x-[-1]"
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
