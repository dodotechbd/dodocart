import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>DodoCart - Your Online Shopping Destination</title>
        <meta name="description" content="Welcome to DodoCart - Your Online Shopping Destination" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-3xl font-semibold">DodoCart</h1>
        <p>Your Online Shopping Destination</p>
      </header>

      <main className="container mx-auto my-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>

      <footer className="bg-blue-500 text-white text-center py-4">
        <p>&copy; 2023 DodoCart. All rights reserved.</p>
      </footer>
    </div>
  );
}

const Card = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <img
        src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Product Name"
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-lg text-gray-800 font-semibold">Product Name</h2>
      <p className="text-gray-500">Product description goes here.</p>
      <p className="text-blue-500 font-semibold mt-2">$19.99</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4">Add to Cart</button>
    </div>
  );
};
