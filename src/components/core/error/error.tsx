import Image from 'next/image';

const resetAppState = () => {
  window.location.reload();
};

export function ErrorBoundaryFallback() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Image src="/images/alert-circle.svg" alt="error" className="m-auto" width={100} height={100} />
        <h1 className="m-auto font-bold text-xl text-center py-4">Oops! Something went wrong</h1>
        <h3 className="m-auto text-gray-400 text-sm text-center py-2">
          Try refreshing the page and if it doesn&#39;t solve the issue, please email us at{' '}
          <a href="mailto:contact@parthhub.com" className="text-blue-500">
            dev.dodotech@gmail.com
          </a>
        </h3>
        <button
          className="m-auto flex rounded-md bg-blue-500 border border-transparent shadow-sm text-base font-medium text-white focus:outline-none px-6 py-2 mt-5"
          onClick={resetAppState}
        >
          Reload
        </button>
      </div>
    </div>
  );
}
