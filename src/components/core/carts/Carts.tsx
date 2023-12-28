import { ProductCart } from './ProductCart';
export const Carts = () => {
  return (
    <div className="container lg:px-40 mx-auto mt-5 grid lg:grid-cols-4 gap-4 ">
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <ProductCart />
    </div>
  );
};
