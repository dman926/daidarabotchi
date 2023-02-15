import { createContext, ReactNode, useContext, useMemo } from 'react';
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
  Analytics,
} from 'firebase/analytics';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage as Storage } from 'firebase/storage';
import { getFunctions, Functions } from 'firebase/functions';

type AppCheckProvider =
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

const FirebaseContext = createContext<null | Firebase>(null);

export const useFirebase = () => {
  const firebase = useContext(FirebaseContext);
  if (firebase === null) {
    throw new Error('firebaseOptions not provided to FirebaseProvider');
  }
  return firebase;
};

export function FirebaseProvider({
  firebaseOptions,
  firebaseAppCheckProvider,
  children,
}: {
  firebaseOptions: FirebaseOptions | false;
  firebaseAppCheckProvider?: AppCheckProvider;
  children: ReactNode;
}) {
  const memoizedFirebase = useMemo(
    () =>
      firebaseOptions
        ? new Firebase(firebaseOptions, firebaseAppCheckProvider)
        : null,
    [firebaseOptions, firebaseAppCheckProvider]
  );

  return (
    <FirebaseContext.Provider value={memoizedFirebase}>
      <div data-testid="firebase-provider" />
      {children}
    </FirebaseContext.Provider>
  );
}

export default Firebase;
