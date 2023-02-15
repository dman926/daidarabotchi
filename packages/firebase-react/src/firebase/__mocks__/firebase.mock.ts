import type { FirebaseApp } from 'firebase/app';
import type { Analytics } from 'firebase/analytics';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import type { FirebaseStorage as Storage } from 'firebase/storage';
import type { Functions } from 'firebase/functions';
import type { AppCheck } from 'firebase/app-check';

export const mockApp = () => ({
  FirebaseApp: {},
  initializeApp: vi.fn(() => ({} as FirebaseApp)),
  FirebaseOptions: {},
})

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
