import { Carts } from '@components/core';
import { Banner, Category } from '@components/home';

export default function Home() {
  return (
    <main>
      <Banner />
      <Carts />
      <Category />
    </main>
  );
}
