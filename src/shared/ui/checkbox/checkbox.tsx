import { type TCheckboxListItem } from './types';
import styles from './checkbox.module.css';
import { IconButtonUI } from '../icon/icon';
import { ICON_TYPE } from '../../lib/constants';
export const Checkbox = (props: TCheckboxListItem) => {
  const { id, isChecked, onChange, label, chekboxCategory = false } = props;

  return (
    <label className={styles.checkbox_label}>
      <input
        id={id}
        className={
          styles.checkbox_input +
          ' ' +
          (chekboxCategory
            ? styles.checkbox_category
            : styles.checkbox_subcategory)
        }
        type='checkbox'
        checked={isChecked}
        onChange={onChange}
      />
      <span className={styles.checkbox_span_text}>{label}</span>
      <span className={styles.chevron}>
        {chekboxCategory && isChecked && (
          <IconButtonUI type={ICON_TYPE.CHEVRON_UP} />
        )}
      </span>
    </label>
  );
};
