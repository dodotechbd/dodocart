import { Button } from '@components/core';

export default function Home() {
  return (
    <div className="min-h-screen ">
      <main className="container mx-auto my-8">
        <Button icon small className="mt-8 mx-auto">
          View More
        </Button>
      </main>
    </div>
  );
}

const Card = () => {
  return (
    <div className="bg-[#F5F5F5] p-4 rounded-md shadow-md">
      <img
        src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Product Name"
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-lg text-gray-800 font-semibold">Product Name</h2>
      <p className="text-gray-500">Product description goes here.</p>
      <p className="font-semibold mt-2">$19.99</p>
      <Button small className="mt-4">
        Add To Cart
      </Button>
    </div>
  );
};
