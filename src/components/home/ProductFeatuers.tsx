import { Button } from '@components/core';
import Image from 'next/image';

export const ProductFeatuers = () => {
  return (
    <div className="lg:flex">
      <div className="lg:flex lg:flex-col">
        <div className="lg:flex">
          <div className="lg:flex place-items-center bg-[#EDEDED] lg:py-12">
            <Image
              className="lg:ml-[-65px] mx-auto lg:pr-10"
              src="/images/headphone.png"
              width={200}
              height={200}
              alt="headphones"
            />
            <div className="text-center lg:text-start">
              {/* <h1 className="text-[29px] font-light">Apple</h1> */}
              <h1 className="text-[29px] font-light">
                Apple Vision <span className="font-medium">Pro</span>
              </h1>
              <p className="text-sm text-[#909090]">An immersive way to experience entertainment</p>
            </div>
          </div>
          <div className="lg:flex place-items-center overflow-hidden bg-[#353535] text-[#FFFFFF]">
            <Image
              className="lg:ml-[-150px] mx-auto  -scale-y-90 rotate-180"
              src="/images/headphones.png"
              width={280}
              height={200}
              alt="headphones"
            />
            <div className="pr-6 text-center lg:text-start p-1 ">
              <h1 className="text-[29px] font-light">
                Apple AirPods <span className="font-medium">Max</span>
              </h1>
              <p className="text-sm text-[#909090]">Computational audio. Listen, its powerful</p>
            </div>
          </div>
        </div>
        <div className="lg:flex place-items-center pr-12 lg:order-first lg:w-[720px]">
          <Image className="lg:ml-[-110px]" src="/images/gameRemote.png" alt="image" width={400} height={400} />
          <div className="text-center lg:text-start">
            <h1 className="font-medium lg:text-5xl text-3xl  py-3">Playstation5</h1>
            <p className="text-sm text-[#909090] ">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex place-items-center bg-[#EDEDED] lg:pl-14 p-3">
        <div className="overflow-hidden">
          <Image
            src="/images/color.png"
            className="rounded-lg lg:ml-[50%] border-black border-8"
            height={430}
            width={660}
            alt="image"
          />
          <div className="bg-gradient-to-r from-[#7D7E82] from-10% via-[#AFB0B5] via-30% to-[#AEAFB4] to-90% lg:w-96 h-6 lg:ml-20 rounded-b-lg"></div>
        </div>
        <div className=" mb-3 text-center lg:text-start order-first">
          <h2 className="font-extralight lg:text-[64px] text-[30px]">
            Macbook <span className="font-medium">Air</span>
          </h2>
          <p className="font-medium text-sm text-[#909090] leading-6">
            The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
          </p>
          <Button small className="mx-auto lg:mx-0 my-2">
            Show Now
          </Button>
        </div>
      </div>
    </div>
  );
};
