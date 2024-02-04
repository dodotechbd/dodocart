import { Carts } from '@components/core';
import { Banner, BannerTwo, Category, ProductFeatuers } from '@components/home';

export default function Home() {
  return (
    <main>
      <Banner />
      <ProductFeatuers />
      <Category />
      <Carts />
      <BannerTwo />
    </main>
  );
}
