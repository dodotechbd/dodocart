import Link from 'next/link';
import { ProductCart } from './ProductCart';
export const Carts = () => {
  return (
    <div className="container lg:px-40 px-3 mx-auto mt-5 ">
      <div>
        <ul className="flex lg:gap-8 gap-3 mb-8 font-medium text-lg leading-8 text-[#8B8B8B]">
          <li className="hover:underline text-black">
            <Link href="#product">New Arrival</Link>
          </li>
          <li className="hover:underline hover:text-black">
            <Link href="#product">Bestseller</Link>
          </li>
          <li className="hover:underline hover:text-black">
            <Link href="#product">Featured Products</Link>
          </li>
        </ul>
      </div>
      <div id="#product" className="grid lg:grid-cols-4 gap-4">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  );
};
