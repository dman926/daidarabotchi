import { FirebaseApp, initializeApp, FirebaseOptions } from 'firebase/app';
import {
  AppCheck,
  initializeAppCheck,
  ReCaptchaV3Provider,
  ReCaptchaEnterpriseProvider,
  CustomProvider,
} from 'firebase/app-check';
import {
  isSupported as isAnalyticsSupported,
  getAnalytics,
} from 'firebase/analytics';
import type { Analytics } from 'firebase/analytics';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage as Storage } from 'firebase/storage';
import { getFunctions, Functions } from 'firebase/functions';

export type AppCheckProvider =
  | ReCaptchaV3Provider
  | ReCaptchaEnterpriseProvider
  | CustomProvider;

export class Firebase {
  app: FirebaseApp;

  appCheck?: AppCheck;

  analytics?: Analytics;

  auth: Auth;

  firestore: Firestore;

  storage: Storage;

  functions: Functions;

  constructor(
    firebaseConfig: FirebaseOptions,
    firebaseAppCheckProvider?: AppCheckProvider
  ) {
    this.app = initializeApp(firebaseConfig);
    isAnalyticsSupported().then((supported) => {
      if (supported) {
        this.analytics = getAnalytics(this.app);
      }
    });
    if (firebaseAppCheckProvider) {
      this.appCheck = initializeAppCheck(this.app, {
        provider: firebaseAppCheckProvider,
        isTokenAutoRefreshEnabled: true,
      });
    }
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
    this.functions = getFunctions(this.app);
  }
}

export default Firebase;
