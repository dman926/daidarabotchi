import Bio from '../../resume/bio/bio';
import Education from '../../resume/education/education';
import Header from '../../resume/header/header';
import Projects from '../../resume/projects/projects';
import Work from '../../resume/work/work';
import styles from './layout.module.scss';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  return (
    <main className={styles['app']}>
      <Header />
      <Bio />
      <Work />
      <Projects />
      <Education />
    </main>
  );
}

export default Layout;
