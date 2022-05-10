import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import {
  Analytics,
  getAnalytics,
  isSupported as isAnalyticsSupported,
} from 'firebase/analytics';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { FirebaseStorage, getStorage } from 'firebase/storage';
import { Functions, getFunctions } from 'firebase/functions';
import * as FirebaseAdminSDK from 'firebase-admin';
import { createContext, ReactNode, useContext, useMemo } from 'react';
import { ServiceAccount } from 'firebase-admin';

export class Firebase {
  app: FirebaseApp;

  analytics?: Analytics;

  auth: Auth;

  firestore: Firestore;

  storage: FirebaseStorage;

  functions: Functions;

  constructor(firebaseConfig: FirebaseOptions) {
    this.app = initializeApp(firebaseConfig);
    isAnalyticsSupported().then((supported) => {
      if (supported) {
        this.analytics = getAnalytics(this.app);
      }
    });
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
    this.functions = getFunctions(this.app);
  }
}

interface FirebaseContextValue {
  firebase: Firebase;
  adminSdk?: typeof FirebaseAdminSDK;
}

const FirebaseContext = createContext<null | FirebaseContextValue>(null);

export const useFirebase = () => {
  const firebase = useContext(FirebaseContext);
  if (firebase === null) {
    throw new Error('firebaseOptions not provided to FirebaseProvider');
  }
  return firebase;
};

export function FirebaseProvider({
  firebaseOptions,
  serviceAccount,
  children,
}: {
  firebaseOptions: FirebaseOptions | false;
  serviceAccount?: ServiceAccount;
  children: ReactNode;
}) {
  const memoizedFirebase = useMemo(
    () => (firebaseOptions ? new Firebase(firebaseOptions) : false),
    [firebaseOptions]
  );
  const memoizedAdminSDK = useMemo(() => {
    if (serviceAccount) {
      FirebaseAdminSDK.initializeApp({
        credential: FirebaseAdminSDK.credential.cert(serviceAccount),
      });
      return FirebaseAdminSDK;
    }
    return undefined;
  }, [serviceAccount]);

  const memoizedValue = useMemo<null | FirebaseContextValue>(() => {
    if (memoizedFirebase) {
      return {
        firebase: memoizedFirebase,
        adminSdk: memoizedAdminSDK,
      };
    }
    return null;
  }, [memoizedFirebase, memoizedAdminSDK]);

  if (!memoizedValue) {
    return <h1>ERROR: MISSING FIREBASE OPTIONS!</h1>;
  }

  return (
    <FirebaseContext.Provider value={memoizedValue}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default Firebase;
