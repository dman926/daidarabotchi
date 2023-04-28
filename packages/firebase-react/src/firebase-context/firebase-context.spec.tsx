/* eslint-disable import/first */
vi.resetModules();
import { ReactElement, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { FirebaseProvider } from './firebase-context';

const mockFirebaseOptions = {
  apiKey: 'test_apiKey',
  authDomain: 'test_authDomain',
  projectId: 'test_projectId',
  storageBucket: 'test_storageBucket',
  messagingSenderId: 'test_messagingSenderId',
  appId: 'test_appId',
  measurementId: 'test_measurementID',
};

function ProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <FirebaseProvider firebaseOptions={mockFirebaseOptions}>
      {children}
    </FirebaseProvider>
  );
}

const renderWithProvider = (ui: ReactElement) =>
  render(ui, { wrapper: ProviderWrapper });

describe('Firebase React', () => {
  it('should generate a valid firebase object', () => {
    const { baseElement } = renderWithProvider(
      <h1 data-testid="test-h1">test</h1>
    );
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('firebase-provider')).toBeInTheDocument();
    expect(screen.getByTestId('test-h1'));
  });
});
