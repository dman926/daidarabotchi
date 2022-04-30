import React, { Suspense } from 'react';
import { ButtonProps } from '@daidarabotchi/material-ui';
import { Header, LoadingPage } from '@daidarabotchi/new-england-keeshonds-lib';
import PetsIcon from '@mui/icons-material/Pets';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Home, Puppies, Puppy } from './pages';

const Admin = React.lazy(() => import('./pages/admin/admin'));

const menuItemButtonBaseProps: ButtonProps = {
  variant: 'contained',
  color: 'info',
};

export function App() {
  const navigate = useNavigate();
  const location = useLocation();

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
            link: '/puppies',
            ButtonProps: menuItemButtonBaseProps,
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
          <Route path="/puppies" element={<Puppies />} />
          <Route
            path="/puppies/:parentName/:litterNum/:color"
            element={<Puppy />}
          />
        </Routes>
      </main>
    </section>
  );
}

export default App;
