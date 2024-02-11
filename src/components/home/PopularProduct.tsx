import { Button } from '@components/core';
import Image from 'next/image';

const PopularProduct = () => {
  return (
    <div className="flex mx-auto my-10 ">
      <div className=" p-5">
        <div className="relative">
          <Image src="/images/boxHeadphone.png" className="rotate-45" height={212} width={250} alt="box headphone" />
          <Image
            src="/images/watch2.png"
            className="-rotate-[120deg] -mt-28 ml-20"
            height={211}
            width={250}
            alt="watch"
          />
        </div>

        <div className="pl-5 mt-1">
          <h1 className="text-2xl font-light leading-12">Popular Products</h1>
          <p className="font-medium text-[#909090] leading-4">
            iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
          </p>
          <Button className="gap-2 mt-2" small>
            Shop Now
          </Button>
        </div>
      </div>
      <div className=" p-5 bg-[#F9F9F9]">
        <div>
          <Image src="/images/phones.png" className="ml-[80px]" height={471} width={550} alt="box headphone" />
        </div>

        <div className="pl-5 mt-4">
          <h1 className="text-2xl font-light leading-12">Popular Products</h1>
          <p className="font-medium text-[#909090] leading-4">
            iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
          </p>
          <Button className="gap-2 mt-7" small>
            Shop Now
          </Button>
        </div>
      </div>
      <div className="p-5 bg-[#EAEAEA]">
        <div>
          <Image src="/images/iphone.png" className="mx-auto" height={380} width={320} alt="box headphone" />
        </div>

        <div className="pl-5">
          <h1 className="text-2xl font-light leading-12">Popular Products</h1>
          <p className="font-medium text-[#909090] leading-4">
            iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
          </p>
          <Button className="gap-2 mt-3" small>
            Shop Now
          </Button>
        </div>
      </div>
      <div className=" p-5 bg-[#2C2C2C] text-white">
        <div>
          <Image src="/images/monitor.png" className="ml-[30%]" height={400} width={900} alt="box headphone" />
        </div>

        <div className="pl-5">
          <h1 className="text-2xl font-light leading-12">Popular Products</h1>
          <p className="font-medium text-[#909090] leading-4">
            iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
          </p>
          <Button className="gap-2 mt-5 text-white border-white" small>
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
