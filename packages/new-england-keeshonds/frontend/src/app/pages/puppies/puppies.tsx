import styles from './puppies.module.scss';

export function Puppies() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Puppies!</h1>
    </div>
  );
}

export default Puppies;
