import { createContext, ReactNode, useContext } from 'react';
import { UserSlice } from './slices';

export interface Store {
  user: UserSlice;
}

const initialStoreValue: Store = {
  user: new UserSlice(),
};

const StoreContext = createContext<Store>(initialStoreValue);

export const useStore = <Selected,>(
  selector: (store: Store) => Selected
): Selected => {
  const store = useContext(StoreContext);
  return selector(store);
};

export function StoreProvider({ children }: { children: ReactNode }) {
  return (
    <StoreContext.Provider value={initialStoreValue}>
      {children}
    </StoreContext.Provider>
  );
}
