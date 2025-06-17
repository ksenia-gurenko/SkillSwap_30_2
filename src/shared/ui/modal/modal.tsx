// src/shared/ui/modal/modal.tsx
import React, { type ReactNode } from 'react';
import styles from './modal.module.css';
import clsx from 'clsx';
import UserCircleIcon from './user-circle.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  icon?: ReactNode[];
  children?: ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
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
    <div className={styles['modal__backdrop']} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        {icon && Array.isArray(icon) ? (
          <div className={styles['modal__icon']}>
            {icon.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        ) : (
          <div className={styles['modal__icon']}>{icon}</div>
        )}
        {title && (
          <div className={styles['modal__header']}>
            <p>{title}</p>
          </div>
        )}
        {children && <div className={styles['modal__body']}>{children}</div>}
        <div className={styles['modal__footer']}>
          {secondaryButtonText && (
            <button
              className={clsx(
                styles['modal__button'],
                styles['modal__button--secondary']
              )}
              onClick={onSecondaryButtonClick}
            >
              {secondaryButtonText}
            </button>
          )}
          {primaryButtonText && (
            <button
              className={clsx(
                styles['modal__button'],
                styles['modal__button--primary']
              )}
              onClick={onPrimaryButtonClick}
            >
              {primaryButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
