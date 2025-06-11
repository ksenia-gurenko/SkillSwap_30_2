import { forwardRef } from 'react';
import { type ButtonProps } from './types';
import styles from './button.module.css';
import crossSvg from './cross.svg';
import editIconSvg from './Icon_right.svg';
import watchIconSvg from './watch.svg';
import vectorSvg from './vector.svg';

// Конфигурация иконок
const ICON_CONFIG = {
  close: {
    src: crossSvg,
    alt: 'Закрыть',
    className: 'button__cross-icon',
    position: 'right'
  },
  edit: {
    src: editIconSvg,
    alt: 'Редактировать',
    className: 'button__edit-icon',
    position: 'right'
  },
  pending: {
    src: watchIconSvg,
    alt: 'Ожидание',
    className: 'button__watch-icon',
    position: 'left'
  },
  'view-all': {
    src: vectorSvg,
    alt: 'Смотреть все',
    className: 'button__vector-icon',
    position: 'right'
  }
} as const;

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
 * // Кнопка с горизонтальным паддингом
 * <Button paddingX={80} onClick={handleClick}>Назад</Button>
 *
 * // Кнопка закрытия с крестиком
 * <Button variant="close" onClick={handleClose}>Закрыть</Button>
 *
 * // Кнопка редактирования с иконкой справа
 * <Button variant="edit" onClick={handleEdit}>Редактировать</Button>
 *
 * // Кнопка ожидания с иконкой часов слева
 * <Button variant="pending" disabled>Обмен предложен</Button>
 *
 * // Кнопка "Смотреть все" с иконкой стрелки справа
 * <Button variant="view-all" onClick={handleViewAll}>Смотреть все</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      fill = false,
      width,
      paddingX,
      className = '',
      type = 'button',
      disabled = false,
      variant,
      ...props
    },
    ref
  ) => {
    // Формируем классы для кнопки
    const buttonClasses = [
      styles.button,
      fill && styles['button--filled'],
      variant && styles[`button--${variant}`],
      paddingX && styles[`button--padding-${paddingX}`],
      className
    ]
      .filter(Boolean)
      .join(' ');

    // Формируем inline стили для ширины
    const buttonStyle = width ? { width: `${width}px` } : undefined;

    // Получаем конфигурацию иконки
    const iconConfig = variant ? ICON_CONFIG[variant] : null;

    // Рендерим иконку
    const renderIcon = () => {
      if (!iconConfig) return null;
      return (
        <img
          src={iconConfig.src}
          alt={iconConfig.alt}
          className={styles[iconConfig.className]}
        />
      );
    };

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
        {iconConfig?.position === 'left' && renderIcon()}
        {children}
        {iconConfig?.position === 'right' && renderIcon()}
      </button>
    );
  }
);

// Устанавливаем displayName для удобства отладки
Button.displayName = 'Button';
