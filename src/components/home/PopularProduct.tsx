import { Button } from '@components/core';
import Image from 'next/image';

const PopularProduct = () => {
  return (
    <div id="default-carousel" data-carousel="slide">
      <div className="lg:flex mx-auto my-10 relative h-[38rem] overflow-hidden rounded-lg">
        <div className="mb-5  duration-700 ease-in-out" data-carousel-item>
          <div className="">
            <div className="relative">
              <Image
                src="/images/boxHeadphone.png"
                className="rotate-45"
                height={212}
                width={250}
                alt="box headphone"
              />
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
                iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of
                use.
              </p>
              <Button className="gap-2 mt-2" small>
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <div className=" bg-[#F9F9F9] overflow-hidden  duration-700 ease-in-out" data-carousel-item>
          <div>
            <div>
              <Image src="/images/phones.png" className="ml-[80px]" height={471} width={550} alt="box headphone" />
            </div>

            <div className="pl-5  mt-2">
              <h1 className="text-2xl font-light leading-12">Popular Products</h1>
              <p className="font-medium text-[#909090] leading-4">
                iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of
                use.
              </p>
              <Button className="gap-2 mt-3" small>
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <div className=" bg-[#EAEAEA]  duration-700 ease-in-out" data-carousel-item>
          <div>
            <div>
              <Image src="/images/iphone.png" className="mx-auto" height={380} width={320} alt="box headphone" />
            </div>

            <div className="pl-5">
              <h1 className="text-2xl font-light leading-12">Popular Products</h1>
              <p className="font-medium text-[#909090] leading-4">
                iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of
                use.
              </p>
              <Button className="gap-2 mt-5" small>
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <div className="py-5 bg-[#2C2C2C] text-white overflow-hidden  duration-700 ease-in-out" data-carousel-item>
          <div>
            <div>
              <Image src="/images/monitor.png" className="ml-[30%]" height={400} width={900} alt="box headphone" />
            </div>

            <div className="pl-5 lg:mt-16">
              <h1 className="text-2xl font-light leading-12">Popular Products</h1>
              <p className="font-medium text-[#909090] leading-4">
                iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of
                use.
              </p>
              <Button className="gap-2 mt-12 text-white border-white" small>
                Shop Now
              </Button>
            </div>
          </div>
        </div>

        {/* carousel button icon  */}
        <div className="absolute z-30 lg:hidden flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-red-600"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-red-600"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-red-600"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-red-600"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
