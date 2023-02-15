import { render } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mockFirebaseOptions, mockFirebase } from 'firebase-react';
mockFirebase(vi);
// eslint-disable-next-line import/first
import { FirebaseProvider } from 'firebase-react';

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
