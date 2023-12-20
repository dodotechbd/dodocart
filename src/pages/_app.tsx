import { ErrorBoundaryFallback, Footer, Nav } from '@components/core';
import '@styles/globals.css';
import { sfProDisplay } from '@utils/localFonts';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { withErrorBoundary } from 'react-error-boundary';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dodohub</title>
        <meta name="description" content="Dodohub App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={sfProDisplay.className}>
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
