import Link from 'next/link';

export const ResetPassword = () => {
  return (
    <div className="max-w-sm w-11/12 lg:w-full mx-auto py-8 lg:py-20">
      <h2 className="text-2xl mb-8">Reset Password</h2>
      <form action="#">
        <div className="mb-5">
          <label htmlFor="#" className="font-medium">
            Email
          </label>
          <input
            type="email"
            className="w-full mt-1.5 px-3 py-2 rounded-md border-black/20 focus:border-black border outline-none"
            placeholder="joe@email.com"
          />
        </div>
        <button
          type="submit"
          className="py-3 rounded-md w-full text-center bg-black hover:bg-opacity-90 text-white font-medium"
        >
          Reset
        </button>
      </form>
      <p className="text-center text-sm mt-6">
        <Link href={'/signin'} className="font-semibold text-black hover:underline">
          Cancel
        </Link>
      </p>
    </div>
  );
};
