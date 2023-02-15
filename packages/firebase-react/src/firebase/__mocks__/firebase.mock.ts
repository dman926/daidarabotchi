import type { FirebaseApp } from 'firebase/app';
import type { Analytics } from 'firebase/analytics';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import type { FirebaseStorage as Storage, ListResult, StorageReference } from 'firebase/storage';
import type { Functions } from 'firebase/functions';
import type { AppCheck } from 'firebase/app-check';
import type { vi as VitestUtils } from 'vitest';

export const mockApp = () => ({
  FirebaseApp: {},
  initializeApp: vi.fn(() => ({} as FirebaseApp)),
  FirebaseOptions: {},
});

export const mockAnalytics = () => ({
  isSupported: vi.fn(() => Promise.resolve(true)),
  getAnalytics: vi.fn(() => ({} as Analytics)),
  Analytics: {},
});

export const mockAuth = () => ({
  getAuth: vi.fn(() => ({} as Auth)),
  Auth: {},
});

export const mockFirestore = () => ({
  getFirestore: vi.fn(() => ({} as Firestore)),
  Firestore: {},
});

export const mockStorage = () => ({
  getStorage: vi.fn(() => ({} as Storage)),
  ref: vi.fn(() => ({} as StorageReference)),
  listAll: vi.fn(() => Promise.resolve({} as ListResult)),
  FirebaseStorage: {},
});

export const mockFunctions = () => ({
  getFunctions: vi.fn(() => ({} as Functions)),
  Functions: {},
});

export const mockAppCheck = () => ({
  AppCheck: {},
  initializeAppCheck: vi.fn(() => ({} as AppCheck)),
  ReCaptchaV3Provider: {},
  ReCaptchaEnterpriseProvider: {},
  CustomProvider: {},
});

export const mockFirebaseOptions = {
  apiKey: 'test_apiKey',
  authDomain: 'test_authDomain',
  projectId: 'test_projectId',
  storageBucket: 'test_storageBucket',
  messagingSenderId: 'test_messagingSenderId',
  appId: 'test_appId',
  measurementId: 'test_measurementID',
};

export const mockFirebase = (vi: typeof VitestUtils) => {
  vi.doMock('firebase/app', mockApp);
  vi.doMock('firebase/analytics', mockAnalytics);
  vi.doMock('firebase/auth', mockAuth);
  vi.doMock('firebase/firestore', mockFirestore);
  vi.doMock('firebase/storage', mockStorage);
  vi.doMock('firebase/functions', mockFunctions);
  vi.doMock('firebase/app-check', mockAppCheck);
};
