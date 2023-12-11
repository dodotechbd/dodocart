import { Camera, Computer, HeadPhone, Phone } from '@components/icons';
import { Gaming } from '@components/icons/Gaming';

export function Category() {
  return (
    <div className="lg:px-40 lg:py-20 ">
      <h1 className="font-medium text-base leading-8 mb-4 ">Browse By Category</h1>
      <div className="grid lg:grid-cols-6 gap-8">
        <div className=" bg-[#EDEDED] py-6 px-[52px] rounded-2xl w-40 h-32 items-center">
          <Phone />
          <p className="font-medium text-base">Phones</p>
        </div>
        <div className="bg-[#EDEDED] py-6 px-[52px] rounded-2xl w-40 h-32">
          <Phone />
          <p className="font-medium text-base">Smart Watches</p>
        </div>
        <div className="bg-[#EDEDED] py-6 px-[52px] rounded-2xl w-40 h-32">
          <Camera />
          <p className="font-medium text-base">Cameras</p>
        </div>
        <div className="bg-[#EDEDED] py-6 px-[52px] rounded-2xl w-40 h-32">
          <HeadPhone />
          <p className="font-medium text-base">Headphones</p>
        </div>
        <div className="bg-[#EDEDED] py-6 px-[52px] rounded-2xl w-40 h-32">
          <Computer />
          <p className="font-medium text-base">Computers</p>
        </div>
        <div className="bg-[#EDEDED] py-6 px-[52px] rounded-2xl w-40 h-32">
          <Gaming />
          <p className="font-medium text-base">Gaming</p>
        </div>
      </div>
    </div>
  );
}
