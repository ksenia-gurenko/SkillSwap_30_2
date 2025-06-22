import styles from './radio-button.module.css';
import type { TRadioButtonUIProps } from './type';

export const RadioButtonUI = ({
  selected,
  onChange,
  label
}: TRadioButtonUIProps) => (
  <label className={styles.radioContainer}>
    <input
      type='radio'
      checked={selected}
      onChange={onChange}
      className={styles.radioInput}
    />
    <span className={styles.radioLabel}>{label}</span>
  </label>
);
