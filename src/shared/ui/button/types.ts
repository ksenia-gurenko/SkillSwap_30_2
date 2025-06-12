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

  /** Ширина кнопки в пикселях (опционально, для особых случаев) */
  width?: number;

  /** Горизонтальный паддинг кнопки (55px - кнопки "Готово/Продолжить", 80px - "Назад", 192px - "Далее") */
  paddingX?: 55 | 80 | 192;

  /** Дополнительные CSS-классы */
  className?: string;

  /** Тип кнопки */
  type?: 'button' | 'submit' | 'reset';

  /** Отключена ли кнопка */
  disabled?: boolean;

  /** Вариант кнопки с иконкой */
  variant?: 'close' | 'edit' | 'pending' | 'view-all';
}
