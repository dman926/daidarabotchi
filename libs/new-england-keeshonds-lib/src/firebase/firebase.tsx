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
  children,
}: {
  firebaseOptions: FirebaseOptions | false;
  children: ReactNode;
}) {
  const memoizedFirebase = useMemo(
    () => (firebaseOptions ? new Firebase(firebaseOptions) : false),
    [firebaseOptions]
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
