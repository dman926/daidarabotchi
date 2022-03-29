import styles from './resume-footer.module.scss';

/* eslint-disable-next-line */
export interface ResumeFooterProps {}

export function ResumeFooter(props: ResumeFooterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ResumeFooter!</h1>
    </div>
  );
}

export default ResumeFooter;
