import Image from 'next/image';
import { Button } from '../buttons';

export const Banner = () => {
  return (
    <div className="container mx-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
      <div className="flex items-center px-40 ">
        <div>
          <p>Pro.Beyond.</p>
          <h1 className="text-8xl">IPhone 14 Pro</h1>
          <span>Created to change everything for the better. For everyone</span>
          <Button className="py-4 px-14">Shop Now</Button>
        </div>
        <div>
          <Image width={300} height={300} src="/public/images/phone.png" alt="banner" />
        </div>
      </div>
    </div>
  );
};
