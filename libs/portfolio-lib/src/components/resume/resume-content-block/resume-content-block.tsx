import styles from './resume-content-block.module.scss';

/* eslint-disable-next-line */
export interface ResumeContentBlockProps {}

export function ResumeContentBlock(props: ResumeContentBlockProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ResumeContentBlock!</h1>
    </div>
  );
}

export default ResumeContentBlock;
