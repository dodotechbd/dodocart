import { Banner, Category } from '@components/home';
import PopularProduct from '@components/home/PopularProduct';

export default function Home() {
  return (
    <main>
      <Banner />
      <Category />
      <PopularProduct />
    </main>
  );
}
