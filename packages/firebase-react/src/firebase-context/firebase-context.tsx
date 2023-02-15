import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { FirebaseOptions } from 'firebase/app';
import { Firebase } from '../firebase/firebase';
import type { AppCheckProvider } from '../firebase/firebase';

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

export default FirebaseContext;