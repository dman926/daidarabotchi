import { Button, Container, Typography } from '@daidarabotchi/material-ui';
import { useAppDispatch, useAppSelector } from '@src/hooks';
import { selectCount, increment, decrement } from '@src/store/slices/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';

export function Index() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  const dec = () => {
    dispatch(decrement());
  };

  const inc = () => {
    dispatch(increment());
  };

  return (
    <Container>
      <Button onClick={dec}>Decrement</Button>
      <Typography>{count}</Typography>
      <Button onClick={inc}>Decrement</Button>
    </Container>
  );
}

export default Index;
