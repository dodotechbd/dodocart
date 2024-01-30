import { Button } from '@components/core';
import Image from 'next/image';

export const ProductFeatuers = () => {
  return (
    <div className="flex">
      <div className="">
        <div className="flex place-items-center pr-12 lg:w-[720px]">
          <Image className="ml-[-110px]" src="/images/gameRemote.png" alt="image" width={400} height={400} />
          <div>
            <h1 className="font-medium text-5xl py-3">Playstation5</h1>
            <p className="text-sm text-[#909090]">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex place-items-center bg-[#EDEDED] lg:py-12">
            <Image className="ml-[-65px] pr-10" src="/images/headphone.png" width={200} height={200} alt="headphones" />
            <div className="">
              <h1 className="text-[29px] font-light">Apple</h1>
              <h1 className="text-[29px] font-light">
                Vision <span className="font-medium">Pro</span>
              </h1>
              <p className="text-sm text-[#909090]">An immersive way to experience entertainment</p>
            </div>
          </div>
          <div className="flex place-items-center overflow-hidden bg-[#353535] text-[#FFFFFF]">
            <Image
              className="ml-[-150px]  -scale-y-90 rotate-180"
              src="/images/headphones.png"
              width={280}
              height={200}
              alt="headphones"
            />
            <div className="pr-6">
              <h1 className="text-[29px] font-light">
                Apple AirPods <span className="font-medium">Max</span>
              </h1>
              <p className="text-sm text-[#909090]">Computational audio. Listen, its powerful</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex place-items-center bg-[#EDEDED] pl-14">
        <div className="">
          <h2 className="font-extralight text-[64px]">
            Macbook <span className="font-medium">Air</span>
          </h2>
          <p className="font-medium text-sm text-[#909090] leading-6">
            The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
          </p>
          <Button small>Show Now</Button>
        </div>
        <div className="overflow-hidden">
          <Image
            src="/images/color.png"
            className="rounded-lg ml-[50%] border-black border-8"
            height={430}
            width={660}
            alt="image"
          />
          <div className="bg-gradient-to-r from-[#7D7E82] from-10% via-[#AFB0B5] via-30% to-[#AEAFB4] to-90% w-96 h-6 ml-20 rounded-b-lg"></div>
        </div>
      </div>
    </div>
  );
};
