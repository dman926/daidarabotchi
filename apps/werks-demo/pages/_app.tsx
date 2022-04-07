import { Box } from '@daidarabotchi/material-ui';
import { Footer, Header } from '@daidarabotchi/werks-demo-lib';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({});

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main id="content" style={{ flexGrow: 1 }}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default CustomApp;
