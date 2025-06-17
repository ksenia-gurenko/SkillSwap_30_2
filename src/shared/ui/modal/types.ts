import { type ReactNode } from 'react';

/**
 * Базовые пропсы для всех модальных окон
 */
export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Пропсы для модалки с заголовком и иконкой
 */
export interface IconModalProps extends BaseModalProps {
  title?: string;
  icon?: ReactNode[];
  children?: ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}
