import { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FirebaseProvider } from './firebase';

// TOOD: Create mock for firebase packages to properly test class

const renderWithProvider = (ui: ReactElement) =>
  render(<FirebaseProvider firebaseOptions={false}>{ui}</FirebaseProvider>);

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
