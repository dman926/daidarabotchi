import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoadingPage } from '../components/pages/loading-page/loading-page';
import { Home } from './pages';

const Admin = lazy(() => import('./pages/admin/admin'));

export function App() {
  return (
    <section className="app" data-testid="app-wrapper">
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
