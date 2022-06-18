import { createContext, ReactNode, useContext, useMemo } from 'react';

// Firebase v9 Compat Begin
import firebaseCompat from 'firebase/compat/app';
import 'firebase/compat/app-check';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';

type FirebaseApp = firebaseCompat.app.App;
type AppCheck = firebaseCompat.appCheck.AppCheck;
type Analytics = firebaseCompat.analytics.Analytics;
type Auth = firebaseCompat.auth.Auth;
type Firestore = firebaseCompat.firestore.Firestore;
type Storage = firebaseCompat.storage.Storage;
type Functions = firebaseCompat.functions.Functions;
export type FirebaseOptions = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};
type AppCheckProvider = firebaseCompat.appCheck.AppCheckProvider;
const { initializeApp } = firebaseCompat;
const isAnalyticsSupported = () => Promise.resolve(true); // I will assume analytics are supported
const getAnalytics = (app: FirebaseApp) => app.analytics();
const initializeAppCheck = (
  app: FirebaseApp,
  options: {
    provider: AppCheckProvider;
    isTokenAutoRefreshEnabled: boolean;
  }
) => {
  const appCheck = app.appCheck();
  appCheck.activate(options);
  return appCheck;
};
const getAuth = (app: FirebaseApp) => app.auth();
const getFirestore = (app: FirebaseApp) => app.firestore();
const getStorage = (app: FirebaseApp) => app.storage();
const getFunctions = (app: FirebaseApp) => app.functions();
// Firebase v9 Compat End

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
        : false,
    [firebaseOptions, firebaseAppCheckProvider]
  );

  if (!memoizedFirebase) {
    return <h1>ERROR: MISSING FIREBASE OPTIONS!</h1>;
  }

  return (
    <FirebaseContext.Provider
      value={memoizedFirebase}
      data-testid="firebase-provider"
    >
      {children}
    </FirebaseContext.Provider>
  );
}

export default Firebase;
