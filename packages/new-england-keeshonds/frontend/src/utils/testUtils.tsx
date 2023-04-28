import { render } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { FirebaseProvider } from 'firebase-react';

const mockFirebaseOptions = {
  apiKey: 'test_apiKey',
  authDomain: 'test_authDomain',
  projectId: 'test_projectId',
  storageBucket: 'test_storageBucket',
  messagingSenderId: 'test_messagingSenderId',
  appId: 'test_appId',
  measurementId: 'test_measurementID',
};

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <FirebaseProvider firebaseOptions={mockFirebaseOptions}>
      <MemoryRouter>{children}</MemoryRouter>
    </FirebaseProvider>
  );
}

const renderWithProvider = (ui: ReactElement) =>
  render(ui, { wrapper: Wrapper });

export * from '@testing-library/react';
export { renderWithProvider };
