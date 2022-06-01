import {
  fetchUser,
  selectUser,
  useAppDispatch,
  useAppSelector,
} from '@daidarabotchi/sephira-front-end-lib';
import { useEffect } from 'react';

export function App() {
  const dispatch = useAppDispatch();
  const { logInError, firstName } = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div data-testid="sephira-wrapper">
      <p>{firstName}</p>
      <p>{logInError?.message}</p>
    </div>
  );
}

export default App;
