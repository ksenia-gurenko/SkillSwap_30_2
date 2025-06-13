export interface BadgeProps {
  count: number;
  onClick?: () => void;
  className?: string; // Добавляем пропс для кастомных классов
}
