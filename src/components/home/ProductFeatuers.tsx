import { Button } from '@components/core';
import Image from 'next/image';

export const ProductFeatuers = () => {
  return (
    <div className="flex">
      <div className="">
        <div className="flex place-items-center pr-12">
          <Image className="ml-[-110px]" src="/images/gameRemote.png" alt="image" width={400} height={400} />
          <div>
            <h1 className="font-medium text-5xl py-3">Playstation5</h1>
            <p className="text-sm text-[#909090]">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex place-items-center bg-[#EDEDED]">
            <Image className="ml-[-90px]" src="/images/headphone.png" width={200} height={200} alt="headphones" />
            <div className="px-12">
              <h1 className="text-[29px]">Apple Vision Pro</h1>
              <p className="text-sm">An immersive way to experience entertainment</p>
            </div>
          </div>
          <div className="flex place-items-center overflow-hidden bg-[#353535] text-[#FFFFFF]">
            <Image className="ml-[-50px]" src="/images/headphones.png" width={200} height={200} alt="headphones" />
            <div className="px-12">
              <h1 className="text-[29px]">Apple AirPods Max</h1>
              <p className="text-sm">Computational audio. Listen, its powerful</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex place-items-center bg-[#EDEDED] py-11 pl-14">
        <div className="">
          <h2 className="font-extralight text-[64px]">
            Macbook <span className="font-medium">Air</span>
          </h2>
          <p className="font-medium text-sm text-[#909090] leading-6">
            The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
          </p>
          <Button small>Show Now</Button>
        </div>
        <div>
          <Image src="/images/color.png" height={430} width={660} alt="image" />
        </div>
      </div>
    </div>
  );
};
