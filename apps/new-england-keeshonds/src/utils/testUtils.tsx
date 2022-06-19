import { FirebaseProvider } from '@daidarabotchi/firebase-react';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { environment } from '../environments/environment';

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <FirebaseProvider firebaseOptions={environment.firebaseConfig}>
      <MemoryRouter>{children}</MemoryRouter>
    </FirebaseProvider>
  );
}

const renderWithProvider = (ui: ReactNode) => render(<Wrapper>{ui}</Wrapper>);

export * from '@testing-library/react';
export { renderWithProvider };
