import React from 'react';
import styles from './badge.module.css';
import type { BadgeProps } from './types';

const Badge: React.FC<BadgeProps> = ({ count, onClick, className = '' }) => {
  // Не рендерим компонент если count === 0
  if (count === 0) return null;

  const badgeClass = [
    styles.badge,
    onClick ? styles.badgeClickable : '',
    className // Добавляем переданные извне классы
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={badgeClass} onClick={onClick}>
      <span className={styles.badgeText}>+{count}</span>
    </div>
  );
};

export default Badge;
