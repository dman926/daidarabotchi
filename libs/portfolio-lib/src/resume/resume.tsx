import { ResumeContent, ResumeFoot, ResumeHead } from '../interfaces/resume';
import styles from './resume.module.scss';

/* eslint-disable-next-line */
export interface ResumeProps {
  head?: ResumeHead;
  content?: ResumeContent[];
  foot?: ResumeFoot;
}

export function Resume(props: ResumeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Resume!</h1>
    </div>
  );
}

export default Resume;
