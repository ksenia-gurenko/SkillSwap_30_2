import { useState } from 'react';
import type { FC, InputHTMLAttributes } from 'react';
import styles from './input.module.css';
import eyeIcon from './eye.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  isError?: boolean;
  type?: 'text' | 'password' | 'email';
}

export const Input: FC<InputProps> = ({
  label,
  placeholder,
  error,
  hint,
  iconLeft,
  type = 'text',
  className,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword && isPasswordVisible ? 'text' : type;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={`${styles.inputWrapper} ${error ? styles.error : ''}`}>
        {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
        <input
          type={inputType}
          className={styles.input}
          placeholder={placeholder}
          {...rest}
        />

        {isPassword && (
          <button
            type='button'
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            className={styles.eyeButton}
            aria-label={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
          >
            <img src={eyeIcon} alt='Переключить видимость' aria-hidden="true"/>
          </button>
        )}
      </div>
      {error ? (
        <div className={styles.errorText}>{error}</div>
      ) : hint ? (
        <div className={styles.hintText}>{hint}</div>
      ) : null}{' '}
    </div>
  );
};
