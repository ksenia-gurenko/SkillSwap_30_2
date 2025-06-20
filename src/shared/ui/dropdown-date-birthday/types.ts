export interface DropDownDateBirthdayProps {
  /**
   * Текущее значение даты.
   */
  value: Date | null;
  /**
   * Обработчик изменения даты.
   */
  onChange: (date: Date | null) => void;
  /**
   * Текст-заполнитель для поля ввода.
   */
  placeholder?: string;
  /**
   * Дополнительный класс CSS для стилизации.
   */
  className?: string;
  /**
   * Определяет, является ли поле ввода отключенным.
   */
  disabled?: boolean;
}
