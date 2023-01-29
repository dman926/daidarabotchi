import { FirebaseProvider } from 'firebase-react';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { FirebaseOptions } from 'firebase/app';

const firebaseConfig = import.meta.env.VITE_FIREBASE_CONFIG
  ? (JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG) as FirebaseOptions)
  : false;

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <FirebaseProvider firebaseOptions={firebaseConfig}>
      <MemoryRouter>{children}</MemoryRouter>
    </FirebaseProvider>
  );
}

const renderWithProvider = (ui: ReactNode) => render(<Wrapper>{ui}</Wrapper>);

export * from '@testing-library/react';
export { renderWithProvider };
