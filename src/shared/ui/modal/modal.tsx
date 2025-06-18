// src/shared/ui/modal/modal.tsx
import React from 'react';
import styles from './modal.module.css';
import type { IconModalProps } from './types';
import { Button } from '../button';

export const Modal: React.FC<IconModalProps> = ({
  isOpen,
  onClose,
  title,
  icon,
  children,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modal__backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        {icon && (
          <div className={styles.modal__icon}>
            {Array.isArray(icon) ? icon.map((item, _index) => item) : icon}
          </div>
        )}
        {title && (
          <div className={styles.modal__header}>
            <p>{title}</p>
          </div>
        )}
        {children && <div className={styles.modal__body}>{children}</div>}
        <div className={styles.modal__footer}>
          {secondaryButtonText && (
            <Button fill={false} onClick={onSecondaryButtonClick}>
              <div className={styles.modal__footer}>
              {secondaryButtonText}
              </div>
            </Button>
          )}
          {primaryButtonText && (
            <Button fill={true} onClick={onPrimaryButtonClick}>
              {primaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
