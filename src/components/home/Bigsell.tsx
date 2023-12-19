import { Button } from '@components/core';
import Image from 'next/image';

export function Bigsell() {
  return (
    <div className="flex justify-between bg-gradient-to-r from-[#2E2E2E] to-[#000000] items-center">
      <div>
        <Image width={337.92} height={181.97} src="/images/laptop.png" alt="image" />
        <Image width={237} height={192} src="/images/pc.png" alt="image" />
        <Image width={418.56} height={262.08} src="/images/tablet.png" alt="image-2" />
      </div>
      <div className="text-[#FFFFFF] ">
        <h1 className="text-7xl font-extralight mb-3">
          Big Summer <span className="font-medium ">Sale</span>
        </h1>
        <p className="text-[#787878] leading-10">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <Button light className="text-[#FFFFFF] mt-10" small>
          Shop Now
        </Button>
      </div>
      <div>
        <Image height={365} width={120.36} src="/images/i-phone.png" alt="phone" />
        <Image height={321} width={404} src="/images/watch.png" alt="watch" />
      </div>
    </div>
  );
}
