import { useState, useRef, useEffect } from 'react';
import type { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './editable-field.module.css';
import editIcon from './edit.svg';

type EditableFieldProps = {
  label: string;
  initialValue: string;
  onSave?: (value: string) => void;
  multiline?: boolean;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
);

export const EditableField: FC<EditableFieldProps> = ({
  label,
  initialValue,
  onSave,
  multiline = false,
  ...rest
}) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave?.(value);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>

      <div className={styles.fieldContainer}>
        {isEditing ? (
          multiline ? (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              className={styles.textarea}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={handleSave}
              rows={4}
              {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              className={styles.input}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={handleSave}
              {...(rest as InputHTMLAttributes<HTMLInputElement>)}
            />
          )
        ) : (
          <div className={styles.valueDisplay}>
            {value || <span className={styles.placeholder}>Не указано</span>}
          </div>
        )}

        {!isEditing && (
          <button
            className={styles.editButton}
            onClick={handleEditClick}
            aria-label={`Редактировать ${label}`}
          >
            <img src={editIcon} alt='Редактировать' />
          </button>
        )}
      </div>
    </div>
  );
};
