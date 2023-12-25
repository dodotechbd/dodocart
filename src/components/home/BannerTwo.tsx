import { Button } from '@components/core';
import Image from 'next/image';

export const BannerTwo = () => {
  return (
    <div className="bg-gradient-to-r h-112 from-[#2E2E2E] to-[#000000]">
      <div className="h-full flex flex-col items-center justify-center  mx-auto text-white relative overflow-hidden">
        <h1 className="lg:text-7xl text-5xl font-extralight tracking-tight">
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
          className="absolute lg:w-80 w-28 lg:left-56 left-36 lg:-top-56 -top-10 lg:scale-x-100 scale-x-150 "
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
          className="absolute lg:w-104 lg:-left-20 -left-40 lg:top-44 top-96 scale-x-[-1]"
        />
        <Image
          height={400}
          width={400}
          src="/images/i-phone.png"
          alt="phone"
          className="absolute lg:w-30 w-20 lg:-rotate-31 -rotate-45 lg:top-0 -top-10 lg:-right-6 -right-7"
        />
        <Image
          height={400}
          width={400}
          src="/images/watch.png"
          alt="watch"
          className="absolute lg:w-101 w-52 lg:-bottom-28 -bottom-20 lg:-right-2 -right-24"
        />
      </div>
    </div>
  );
};
