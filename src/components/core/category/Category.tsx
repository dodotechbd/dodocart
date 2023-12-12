import { Camera, Computer, HeadPhone, Phone } from '@components/icons';
import { Gaming } from '@components/icons/Gaming';

export function Category() {
  const categoryStyle =
    'flex flex-col justify-center items-center bg-[#EDEDED] py-6 px-[52px] rounded-2xl w-40 h-32 items-center';
  const testStyle = 'font-medium text-base';

  return (
    <div className="lg:px-40 lg:py-20 ">
      <h1 className="font-medium text-2xl leading-8 mb-4 ">Browse By Category</h1>
      <div className="grid lg:grid-cols-6 gap-8 whitespace-nowrap">
        <div className={categoryStyle}>
          <Phone />
          <p className={testStyle}>Phones</p>
        </div>
        <div className={categoryStyle}>
          <Phone />
          <p className={testStyle}>Smart Watches</p>
        </div>
        <div className={categoryStyle}>
          <Camera />
          <p className={testStyle}>Cameras</p>
        </div>
        <div className={categoryStyle}>
          <HeadPhone />
          <p className={testStyle}>Headphones</p>
        </div>
        <div className={categoryStyle}>
          <Computer />
          <p className={testStyle}>Computers</p>
        </div>
        <div className={categoryStyle}>
          <Gaming />
          <p className={testStyle}>Gaming</p>
        </div>
      </div>
    </div>
  );
}
