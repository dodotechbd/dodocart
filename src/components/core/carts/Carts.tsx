import Link from 'next/link';
import { ProductCart } from './ProductCart';
export const Carts = () => {
  return (
    <div className="container lg:px-40 mx-auto mt-5 ">
      <div>
        <ul className="flex gap-8 mb-8 font-medium text-lg leading-8 text-[#8B8B8B]">
          <li className="hover:underline text-black">
            <Link href="#">New Arrival</Link>
          </li>
          <li className="hover:underline hover:text-black">
            <Link href="/cart">Bestseller</Link>
          </li>
          <li className="hover:underline hover:text-black">
            <Link href="#">Featured Products</Link>
          </li>
        </ul>
      </div>
      <div className="grid lg:grid-cols-4 gap-4">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  );
};
