import styles from './call-to-action.module.scss';

/* eslint-disable-next-line */
export interface CallToActionProps {}

export function CallToAction(props: CallToActionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CallToAction!</h1>
    </div>
  );
}

export default CallToAction;
