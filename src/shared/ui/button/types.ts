import { type ReactNode, type MouseEventHandler } from 'react';

/**
 * Интерфейс пропсов для компонента Button
 */
export interface ButtonProps {
  /** Содержимое кнопки (текст, иконки и т.д.) */
  children: ReactNode;

  /** Функция-обработчик клика */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /** Заполнена ли кнопка (true - зеленый фон, false - прозрачный фон) */
  fill?: boolean;

  /** Ширина кнопки в пикселях */
  width?: number;

  /** Дополнительные CSS-классы */
  className?: string;

  /** Тип кнопки */
  type?: 'button' | 'submit' | 'reset';

  /** Отключена ли кнопка */
  disabled?: boolean;

  /** Вариант кнопки */
  variant?: 'default' | 'close' | 'edit' | 'pending';
}
