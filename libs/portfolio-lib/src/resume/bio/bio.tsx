import styles from './bio.module.scss';

/* eslint-disable-next-line */
export interface BioProps {}

export function Bio(props: BioProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Bio!</h1>
    </div>
  );
}

export default Bio;
