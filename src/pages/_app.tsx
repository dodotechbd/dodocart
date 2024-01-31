import { ErrorBoundary, Footer, Nav } from '@components/core';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Head>
        <title>Dodohub</title>
        <meta name="description" content="Dodohub App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
