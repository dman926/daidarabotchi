import styles from './new-england-keeshonds-lib.module.scss';

/* eslint-disable-next-line */
export interface NewEnglandKeeshondsLibProps {}

export function NewEnglandKeeshondsLib(props: NewEnglandKeeshondsLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NewEnglandKeeshondsLib!</h1>
    </div>
  );
}

export default NewEnglandKeeshondsLib;
