import { Cart, Love } from '@components/icons';

export const Sub = () => {
  return (
    <div className="flex  gap-4 py-2 px-40 container mx-auto items-center justify-between lg:px-20 px-4 bg-[#2E2E2E] text-white">
      <div className="flex gap-2 border-r-2 items-center">
        <Cart />
        <label className="mr-20">Phones</label>
      </div>
      <div className="flex border-r-2">
        <Love />
        <label className="mr-20">Computers</label>
      </div>
      <div className="flex border-r-2">
        <Love />
        <label className="mr-20">Smart Watches</label>
      </div>
      <div className="flex border-r-2">
        <Love />
        <label className="mr-20">Cameras</label>
      </div>
      <div className="flex border-r-2">
        <Love />
        <label className="mr-20">Headphones</label>
      </div>
      <div className="flex">
        <Love />
        <label>geming</label>
      </div>
    </div>
  );
};
