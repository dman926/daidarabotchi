import {
  mockAnalytics,
  mockApp,
  mockAppCheck,
  mockAuth,
  mockFirebaseOptions,
  mockFirestore,
  mockFunctions,
  mockStorage,
} from './__mocks__/firebase.mock';
vi.doMock('firebase/app', mockApp);
vi.doMock('firebase/analytics', mockAnalytics);
vi.doMock('firebase/auth', mockAuth);
vi.doMock('firebase/firestore', mockFirestore);
vi.doMock('firebase/storage', mockStorage);
vi.doMock('firebase/functions', mockFunctions);
vi.doMock('firebase/app-check', mockAppCheck);
// eslint-disable-next-line import/first
import { Firebase } from './firebase';
// eslint-disable-next-line import/first
import type { AppCheckProvider } from './firebase';

describe('Firebase class', () => {
  let firebaseAppCheckProvider: AppCheckProvider;

  beforeAll(() => {
    firebaseAppCheckProvider = {} as AppCheckProvider;
  });

  it('should initialize Firebase class properties correctly', () => {
    const firebase = new Firebase(
      mockFirebaseOptions,
      firebaseAppCheckProvider
    );

    expect(firebase).toBeTruthy();
    expect(firebase.app).toBeTruthy();
    expect(firebase.auth).toBeTruthy();
    expect(firebase.firestore).toBeTruthy();
    expect(firebase.storage).toBeTruthy();
    expect(firebase.functions).toBeTruthy();
  });
});
