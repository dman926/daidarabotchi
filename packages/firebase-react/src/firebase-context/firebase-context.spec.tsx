import { expect } from 'vitest';
import { ReactElement, ReactNode } from 'react';
import matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import {
  mockAnalytics,
  mockApp,
  mockAppCheck,
  mockAuth,
  mockFirebaseOptions,
  mockFirestore,
  mockFunctions,
  mockStorage,
} from '../firebase/__mocks__/firebase.mock';
vi.doMock('firebase/app', mockApp);
vi.doMock('firebase/analytics', mockAnalytics);
vi.doMock('firebase/auth', mockAuth);
vi.doMock('firebase/firestore', mockFirestore);
vi.doMock('firebase/storage', mockStorage);
vi.doMock('firebase/functions', mockFunctions);
vi.doMock('firebase/app-check', mockAppCheck);
// eslint-disable-next-line import/first
import { FirebaseProvider } from './firebase-context';

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
  beforeAll(() => {
    expect.extend(matchers);
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  it('should generate a valid firebase object', () => {
    const { baseElement } = renderWithProvider(
      <h1 data-testid="test-h1">test</h1>
    );
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('firebase-provider')).toBeInTheDocument();
    expect(screen.getByTestId('test-h1'));
  });
});
