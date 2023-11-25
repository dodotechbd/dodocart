import { ErrorBoundaryFallback, Footer, Nav } from '@components/core';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { withErrorBoundary } from 'react-error-boundary';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dodo Cart</title>
        <meta name="description" content="Dodo Cart App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

const AppWithErrorBoundary = withErrorBoundary(App, {
  FallbackComponent: ErrorBoundaryFallback,
});

export default AppWithErrorBoundary;
