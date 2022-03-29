import styles from './resume-header.module.scss';

/* eslint-disable-next-line */
export interface ResumeHeaderProps {}

export function ResumeHeader(props: ResumeHeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ResumeHeader!</h1>
    </div>
  );
}

export default ResumeHeader;
