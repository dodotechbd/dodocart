import { Button } from '@components/core';
import Image from 'next/image';

export const ProductFeatuers = () => {
  return (
    <div className="flex">
      <div className="">
        <div className="flex">
          <Image src="/images/gameRemote.png" alt="image" width={400} height={400} />
          <div>
            <h1>Playstation 5</h1>
            <p>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#EDEDED]">
            <Image src="/images/headphones.png" width={200} height={200} alt="headphones" />
            <h1>Apple AirPods Max</h1>
            <p>Computational audio. Listen, its powerful</p>
          </div>
          <div>
            <Image src="/images/headphone.png" width={200} height={200} alt="headphones" />
            <h1>Apple Vision Pro</h1>
            <p>An immersive way to experience entertainment</p>
          </div>
        </div>
      </div>
      <div className="flex bg-[#EDEDED] py-11 pl-14">
        <div className="mx-auto content-center">
          <h2>Macbook Air</h2>
          <p>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
          <Button small>Show Now</Button>
        </div>
        <div>
          <Image src="/images/color.png" height={430} width={660} alt="image" />
        </div>
      </div>
    </div>
  );
};
