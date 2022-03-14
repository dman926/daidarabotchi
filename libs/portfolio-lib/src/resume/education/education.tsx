import styles from './education.module.scss';

/* eslint-disable-next-line */
export interface EducationProps {}

export function Education(props: EducationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Education!</h1>
    </div>
  );
}

export default Education;
