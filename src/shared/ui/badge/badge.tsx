import React from 'react';
import styles from './badge.module.css';
import type { BadgeProps } from './types';

const Badge: React.FC<BadgeProps> = ({ count, onClick }) => {
  const badgeClass = `${styles.badge} ${onClick ? styles.badgeClickable : ''}`;

  return (
    <div className={badgeClass} onClick={onClick}>
      <span className={styles.badgeText}>+{count}</span>
    </div>
  );
};

export default Badge;