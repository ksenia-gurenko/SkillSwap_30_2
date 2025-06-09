import React from 'react';
import './Tag.css';
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
    className={`tag ${className}`}
    style={{ backgroundColor: backgroundColor || getSkillColor(text) }}
  >
    {text}
  </span>
); 