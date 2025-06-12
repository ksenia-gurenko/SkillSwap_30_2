import React from 'react';
import styles from './tag.module.css';
import { getSkillColor } from './constants';

/**
 * Интерфейс пропсов для компонента Tag
 */
interface TagProps {
  /** Название навыка */
  text: string;
  /** Цвет фона (опционально) */
  backgroundColor?: string;
  /** CSS классы */
  className?: string;
}

/**
 * Тег навыка с автоматическим определением цвета
 */
export const Tag: React.FC<TagProps> = ({ text, backgroundColor, className = '' }) => (
  <span
    className={`${styles.tag} ${className}`}
    style={{ backgroundColor: backgroundColor || getSkillColor(text) }}
  >
    {text}
  </span>
); 