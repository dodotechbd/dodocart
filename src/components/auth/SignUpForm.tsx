import { Input } from '@components/core/input';
import { FacebookRound, Google } from '@components/icons';
import Link from 'next/link';

export const SignUpForm = () => {
  return (
    <div className="max-w-sm w-11/12 lg:w-full mx-auto py-8 lg:py-20">
      <h2 className="text-2xl mb-8">Create Your Account</h2>
      <form action="#">
        <div className="mb-8 space-y-5">
          <Input label="Full Name" type="text" placeholder="Jhon Doe" required />
          <Input label="Email" type="email" placeholder="joe@email.com" required />
          <Input label="Password" type="password" placeholder="Enter 8 character or more" required />
        </div>
        <button
          type="submit"
          className="py-3 rounded-md w-full text-center bg-black hover:bg-opacity-90 text-white font-medium"
        >
          Sign Up
        </button>
      </form>
      <div className="space-y-6 mt-6">
        <p className="text-center text-sm text-black/80">
          {'Already have an account? '}
          <Link href={'/signin'} className="font-semibold text-black">
            Sign In
          </Link>
        </p>
        <div className="flex items-center gap-3">
          <div className="w-full h-px bg-black/30" />
          <p className="whitespace-nowrap">or</p>
          <div className="w-full h-px bg-black/30" />
        </div>
        <button className="w-full flex items-center justify-center gap-2 border rounded-md border-black/50 hover:border-black duration-100 py-2 font-medium">
          <Google size={20} />
          Continue with Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 border rounded-md border-black/50 hover:border-black duration-100 py-2 font-medium">
          <FacebookRound size={20} />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};
