import { Footer, Header } from '@daidarabotchi/new-england-keeshonds-lib';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>New England Keeshonds!</title>
        <base href="/" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="app">
        <Header />
        <main>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </main>
        <Footer />
      </section>
    </>
  );
}

export default CustomApp;
