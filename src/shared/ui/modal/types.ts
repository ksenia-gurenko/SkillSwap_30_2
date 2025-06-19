import { type ReactNode } from 'react';
import type { ButtonProps } from '../button/types';

/**
 * Базовые пропсы для всех модальных окон
 */
export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IconModalProps extends BaseModalProps {
  title?: string;
  icon?: ReactNode[];
  children?: ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  primaryButtonProps?: Omit<ButtonProps, 'children' | 'onClick'>;
  secondaryButtonProps?: Omit<ButtonProps, 'children' | 'onClick'>;
}