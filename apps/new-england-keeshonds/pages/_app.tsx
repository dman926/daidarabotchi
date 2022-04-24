import { ButtonProps } from '@daidarabotchi/material-ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  ThemeProvider,
  useTheme,
  Theme,
  createTheme,
  ThemeOptions,
} from '@mui/material';
import { indigo, blueGrey } from '@mui/material/colors';
import { Header } from '@daidarabotchi/new-england-keeshonds-lib';
import './styles.css';

// TODO: Add dark theme switcher in the future
const theme: ThemeOptions = {
  palette: {
    primary: indigo,
    secondary: blueGrey,
  },
};

const menuItemButtonBaseProps: ButtonProps = {
  variant: 'contained',
  color: 'info',
};

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>New England Keeshonds!</title>
        <base href="/" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={createTheme(theme)}>
        <section className="app">
          <Header
            navigate={(url, options) => {
              router.push(url);
            }}
            title="New England Keeshonds"
            currentRoute={router.asPath}
            home="/"
            menu={[
              {
                text: 'Home',
                link: '/',
                ButtonProps: menuItemButtonBaseProps,
              },
              {
                text: 'Puppies',
                link: '/puppies',
                ButtonProps: menuItemButtonBaseProps,
              },
            ]}
          />
          <main>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </main>
        </section>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
