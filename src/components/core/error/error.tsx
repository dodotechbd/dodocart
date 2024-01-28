import Image from 'next/image';
import { Button } from '../buttons';

const resetAppState = () => {
  window.location.reload();
};

export function ErrorBoundaryFallback() {
  return (
    <div className="flex h-screen px-4">
      <div className="m-auto">
        <Image src="/images/alert.svg" alt="error" className="m-auto" width={100} height={100} />
        <h1 className="m-auto font-bold text-[#4E4E4E] text-xl text-center py-4">Oops! Something went wrong</h1>
        <h3 className="m-auto text-gray-400 text-sm text-center py-2">
          Try refreshing the page and if it doesn&#39;t solve the issue, please email us at{' '}
          <a href="mailto:dev.dodotech@gmail.com" className="text-black hover:underline">
            dev.dodotech@gmail.com
          </a>
        </h3>
        <Button className="m-auto mt-5" small onClick={resetAppState}>
          Reload
        </Button>
      </div>
    </div>
  );
}
