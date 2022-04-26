import styles from './puppies.module.scss';

/* eslint-disable-next-line */
export interface PuppiesProps {}

export function Puppies(props: PuppiesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Puppies!</h1>
    </div>
  );
}

export default Puppies;
