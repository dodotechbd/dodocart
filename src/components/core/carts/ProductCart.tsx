import { Button } from '@components/core';
import Image from 'next/image';
export const ProductCart = () => {
  return (
    <div className="py-6 px-4 bg-[#909090C4]  rounded-lg text-center">
      <Image className="py-4 mx-auto" src="/images/headphone.png" width={160} height={160} alt="cart image" />
      <p className="font-medium leading-6">Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
      <h1 className="leading-6 font-semibold">$900</h1>
      <Button className="mx-auto" filled>
        Buy Now
      </Button>
    </div>
  );
};
