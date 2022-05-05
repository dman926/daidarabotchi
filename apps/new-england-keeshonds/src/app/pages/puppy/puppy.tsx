import styles from './puppy.module.scss';

export function Puppy() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Puppy!</h1>
    </div>
  );
}

export default Puppy;
