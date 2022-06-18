import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import {
  AppCheck,
  CustomProvider,
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  ReCaptchaV3Provider,
} from 'firebase/app-check';
import {
  Analytics,
  getAnalytics,
  isSupported as isAnalyticsSupported,
} from 'firebase/analytics';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { FirebaseStorage, getStorage } from 'firebase/storage';
import { Functions, getFunctions } from 'firebase/functions';
import { createContext, ReactNode, useContext, useMemo } from 'react';

export class Firebase {
  app: FirebaseApp;

  appCheck?: AppCheck;

  analytics?: Analytics;

  auth: Auth;

  firestore: Firestore;

  storage: FirebaseStorage;

  functions: Functions;

  constructor(
    firebaseConfig: FirebaseOptions,
    firebaseAppCheckProvider?:
      | CustomProvider
      | ReCaptchaV3Provider
      | ReCaptchaEnterpriseProvider
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
  firebaseAppCheckProvider?:
    | CustomProvider
    | ReCaptchaV3Provider
    | ReCaptchaEnterpriseProvider;
  children: ReactNode;
}) {
  const memoizedFirebase = useMemo(
    () =>
      firebaseOptions
        ? new Firebase(firebaseOptions, firebaseAppCheckProvider)
        : false,
    [firebaseOptions, firebaseAppCheckProvider]
  );

  if (!memoizedFirebase) {
    return <h1>ERROR: MISSING FIREBASE OPTIONS!</h1>;
  }

  return (
    <FirebaseContext.Provider value={memoizedFirebase}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default Firebase;
