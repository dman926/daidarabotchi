import { Suspense, lazy } from 'react';
import { ButtonProps } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Header } from '../components/core/header/header';
import { LoadingPage } from '../components/pages/loading-page/loading-page';
import { Home } from './pages';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

const Admin = lazy(() => import('./pages/admin/admin'));

const menuItemButtonBaseProps: ButtonProps = {
  variant: 'contained',
  color: 'info',
};

export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const puppiesButtonBaseProps: ButtonProps = {
    ...menuItemButtonBaseProps,
    onClick: () => {
      navigate('/', {
        state: {
          gallery: true,
          behavior: location.pathname === '/' ? 'smooth' : 'instant',
        },
      });
    },
  };

  return (
    <section className="app" data-testid="app-wrapper">
      <Header
        navigate={(url, options) => {
          navigate(url, options);
        }}
        title={{ icon: <PetsIcon />, text: 'New England Keeshonds' }}
        currentRoute={location.pathname}
        home="/"
        menu={[
          {
            text: 'Home',
            link: '/',
            ButtonProps: menuItemButtonBaseProps,
          },
          {
            text: 'Puppies',
            ButtonProps: puppiesButtonBaseProps,
          },
        ]}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Admin />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </section>
  );
}

export default App;
