import styles from './toggle-button-group.module.scss';

/* eslint-disable-next-line */
export interface ToggleButtonGroupProps {}

export function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ToggleButtonGroup!</h1>
    </div>
  );
}

export default ToggleButtonGroup;
