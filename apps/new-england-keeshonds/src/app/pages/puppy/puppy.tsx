import styles from './puppy.module.scss';

/* eslint-disable-next-line */
export interface PuppyProps {}

export function Puppy(props: PuppyProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Puppy!</h1>
    </div>
  );
}

export default Puppy;
