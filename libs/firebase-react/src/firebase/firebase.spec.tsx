import { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { FirebaseOptions } from 'firebase/app';
import { FirebaseProvider } from './firebase';

const NEK_FIREBASE_CONFIG: FirebaseOptions = JSON.parse(
  process.env['NX_NEK_FIREBASE_CONFIG'] || ''
);

const renderWithProvider = (ui: ReactElement) =>
  render(
    <FirebaseProvider firebaseOptions={NEK_FIREBASE_CONFIG}>
      {ui}
    </FirebaseProvider>
  );

describe('Firebase React', () => {
  it('should generate a valid firebase object', () => {
    const { baseElement } = renderWithProvider(<h1>test</h1>);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('firebase-provider')).toBeInTheDocument();
  });
});
