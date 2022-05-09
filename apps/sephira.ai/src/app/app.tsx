import {
  fetchUser,
  selectUser,
  useAppDispatch,
  useAppSelector,
} from '@daidarabotchi/sephira-lib';
import { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  const dispatch = useAppDispatch();
  const { logInError, firstName } = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <p>{firstName}</p>
      <p>{logInError?.message}</p>
    </>
  );
}

export default App;
