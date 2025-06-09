import React from 'react';
import './Tag.css';
import { SKILL_TO_CATEGORY_MAP, getCategoryColor, CATEGORY_COLORS } from './constants';

/**
 * Интерфейс пропсов для компонента Tag
 */
interface TagProps {
  /** Текст навыка, отображаемый в теге */
  text: string;
  /** Цвет фона тега (опционально, если не указан - определяется автоматически по навыку) */
  backgroundColor?: string;
  /** Дополнительные CSS классы */
  className?: string;
}

/**
 * Функция для получения цвета по названию навыка
 */
const getSkillColor = (skillName: string): string => {
  const category = SKILL_TO_CATEGORY_MAP[skillName];
  return category ? getCategoryColor(category) : CATEGORY_COLORS.ADDITIONAL;
};

/**
 * Компонент Tag для отображения навыков
 * Автоматически определяет цвет на основе категории навыка
 */
export const Tag: React.FC<TagProps> = ({
  text,
  backgroundColor,
  className = '',
}) => {
  const tagColor = backgroundColor || getSkillColor(text);

  return (
    <span
      className={`tag ${className}`}
      style={{ backgroundColor: tagColor }}
    >
      {text}
    </span>
  );
}; 