import { useState, useRef, useEffect } from 'react';
import type { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './editable-field.module.css';
import editIcon from './edit.svg';

type EditableFieldProps = {
  label: string;
  initialValue: string;
  onSave?: (value: string) => void;
  multiline?: boolean;
  readOnly?: boolean;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
);

/**
 * Универсальный компонент редактируемого поля
 * @param label - заголовок поля
 * @param initialValue - начальное значение
 * @param onSave - callback при сохранении
 * @param multiline - многострочный режим (textarea)
 * @param readOnly - режим только для чтения
 * @param rest - стандартные HTML атрибуты input/textarea
 */
export const EditableField: FC<EditableFieldProps> = ({
  label,
  initialValue,
  onSave,
  multiline = false,
  readOnly = false,
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
    if (!readOnly) {
      setIsEditing(true);
    }
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

        {!isEditing && !readOnly && (
          <button
            className={styles.editButton}
            onClick={handleEditClick}
            aria-label={`Редактировать ${label}`}
            type='button'
          >
            <img src={editIcon} alt='Редактировать' />
          </button>
        )}
      </div>
    </div>
  );
};
