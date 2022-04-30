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
    isAnalyticsSupported().then(() => {
      this.analytics = getAnalytics(this.app);
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
  firebaseOptions: FirebaseOptions;
  children: ReactNode;
}) {
  const memoizedFirebase = useMemo(
    () => new Firebase(firebaseOptions),
    [firebaseOptions]
  );

  return (
    <FirebaseContext.Provider value={memoizedFirebase}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default Firebase;
