/* eslint-disable import/first */
import * as appCheck from 'firebase/app-check';
vi.mock('firebase/app-check', () => ({
  AppCheck: {},
  initializeAppCheck: vi.fn(() => ({} as appCheck.AppCheck)),
  ReCaptchaV3Provider: {},
  ReCaptchaEnterpriseProvider: {},
  CustomProvider: {},
}));

import { Firebase } from './firebase';
import type { AppCheckProvider } from './firebase';

const mockFirebaseOptions = {
  apiKey: 'test_apiKey',
  authDomain: 'test_authDomain',
  projectId: 'test_projectId',
  storageBucket: 'test_storageBucket',
  messagingSenderId: 'test_messagingSenderId',
  appId: 'test_appId',
  measurementId: 'test_measurementID',
};

describe('Firebase class', () => {
  let firebaseAppCheckProvider: AppCheckProvider;

  beforeAll(() => {
    firebaseAppCheckProvider = {} as AppCheckProvider;
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  it('should initialize Firebase class properties correctly', () => {
    // (appCheck as any).initializeAppCheck = vi.fn(() => ({} as appCheck.AppCheck));
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
