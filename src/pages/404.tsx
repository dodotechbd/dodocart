import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex my-24 lg:my-44 px-4 text-center">
      <div className="m-auto">
        <Image src="/images/smile-sad.svg" alt="error" className="mx-auto" width={100} height={100} />
        <h1 className="text-7xl text-[#4E4E4E] font-medium">404</h1>
        <h1 className="mx-auto font-bold text-[#4E4E4E] text-xl py-4">Oops! Page not be found</h1>
        <h3 className="max-w-lg text-gray-500 py-2">
          Sorry but the page you are looking for does not exist, have been removed, name changed or it is temporary
          unavailable
        </h3>
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 rounded-md font-medium hover:bg-black/10 duration-150"
          >
            Back
          </button>
          <Link
            href="/"
            className="px-6 py-2 rounded-md font-medium hover:bg-black/90 bg-black text-white duration-150"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
