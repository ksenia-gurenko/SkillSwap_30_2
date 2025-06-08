import { forwardRef } from 'react';
import { type ButtonProps } from './types';
import styles from './button.module.css';

/**
 * Универсальный компонент кнопки
 * Поддерживает различные варианты оформления согласно дизайну
 *
 * @example
 * // Заполненная кнопка
 * <Button fill onClick={handleClick}>Зарегистрироваться</Button>
 *
 * // Незаполненная кнопка с кастомной шириной
 * <Button width={200} onClick={handleClick}>Войти</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      fill = false,
      width,
      className = '',
      type = 'button',
      disabled = false,
      ...props
    },
    ref
  ) => {
    // Формируем классы для кнопки
    const buttonClasses = [
      styles.button,
      fill && styles['button--filled'],
      className
    ]
      .filter(Boolean)
      .join(' ');

    // Формируем inline стили для ширины
    const buttonStyle = width ? { width: `${width}px` } : undefined;

    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        style={buttonStyle}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

// Устанавливаем displayName для удобства отладки
Button.displayName = 'Button';
