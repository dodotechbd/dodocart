import { Carts } from '@components/core';
import { Banner, BannerTwo, Category } from '@components/home';
export default function Home() {
  return (
    <main>
      <Banner />
      <Category />
      <Carts />
      <BannerTwo />
    </main>
  );
}
