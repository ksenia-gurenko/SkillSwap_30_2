import { forwardRef } from 'react';
import { type ButtonProps } from './types';
import styles from './button.module.css';
import crossSvg from './cross.svg';
import editIconSvg from './Icon_right.svg';

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
 * 
 * // Кнопка закрытия с крестиком
 * <Button variant="close" onClick={handleClose}>Закрыть</Button>
 * 
 * // Кнопка редактирования с иконкой справа
 * <Button variant="edit" onClick={handleEdit}>Редактировать</Button>
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
      variant = 'default',
      ...props
    },
    ref
  ) => {
    // Формируем классы для кнопки
    const buttonClasses = [
      styles.button,
      fill && styles['button--filled'],
      variant === 'close' && styles['button--close'],
      variant === 'edit' && styles['button--edit'],
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
        {variant === 'close' ? (
          <>
            {children}
            <img 
              src={crossSvg} 
              alt="Закрыть" 
              className={styles['button__cross-icon']} 
            />
          </>
        ) : variant === 'edit' ? (
          <>
            {children}
            <img 
              src={editIconSvg} 
              alt="Редактировать" 
              className={styles['button__edit-icon']} 
            />
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

// Устанавливаем displayName для удобства отладки
Button.displayName = 'Button';
