import { FirebaseProvider } from '@daidarabotchi/new-england-keeshonds-lib';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { environment } from '../environments/environment';

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <FirebaseProvider firebaseOptions={environment.firebaseConfig}>
      <BrowserRouter>{children}</BrowserRouter>
    </FirebaseProvider>
  );
}

const renderWithProvider = (ui: ReactNode) => render(<Wrapper>{ui}</Wrapper>);

export * from '@testing-library/react';
export { renderWithProvider };
