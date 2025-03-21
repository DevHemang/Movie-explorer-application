import { ErrorBoundary } from '../components/ErrorBoundary';
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/ErrorBoundary.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Head>
        <title>Movie Explorer DB</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp;
