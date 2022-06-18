import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FirebaseOptions, FirebaseProvider } from './firebase';
import { ReactElement } from 'react';

describe('Firebase React', () => {
  const tmp = process.env['NX_NEK_FIREBASE_CONFIG'];
  if (tmp) {
    const NEK_FIREBASE_CONFIG: FirebaseOptions = JSON.parse(tmp);

    const renderWithProvider = (ui: ReactElement) => {
      const wrapper = ({ children }: { children: ReactElement }) => (
        <FirebaseProvider firebaseOptions={NEK_FIREBASE_CONFIG}>
          {children}
        </FirebaseProvider>
      );
      return render(ui, { wrapper });
    };

    it('should generate a valid firebase object', () => {
      const { baseElement } = renderWithProvider(<h1>test</h1>);
      expect(baseElement).toBeTruthy();
      expect(screen.getByTestId('firebase-provider')).toBeInTheDocument();
    });
  }
});
