import { useState, useRef, useEffect, forwardRef } from 'react';
import { type DropDownDateBirthdayProps } from './types';
import styles from './dropdown_date_birthday.module.css';
import calendarIcon from './calendar.svg'; // Предполагаем наличие иконки

/**
 * Компонент DropDownDateBirthday
 * Позволяет выбрать дату рождения с помощью выпадающего календаря.
 */
export const DropDownDateBirthday = forwardRef<HTMLDivElement, DropDownDateBirthdayProps>(
  ({ value, onChange, placeholder = 'дд.мм.гггг', className = '', disabled = false }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(value);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setSelectedDate(value);
    }, [value]);

    const handleInputClick = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };

    const handleDateSelect = (date: Date) => {
      setSelectedDate(date);
      onChange(date);
      setIsOpen(false);
    };

    const handleCancel = () => {
      setIsOpen(false);
    };

    const handleSelect = () => {
      // Здесь можно добавить логику подтверждения, если нужно
      setIsOpen(false);
    };

    // Закрытие календаря при клике вне компонента
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const formattedDate = selectedDate
      ? selectedDate.toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      : '';

    return (
      <div
        ref={(node) => {
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          (wrapperRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={`${styles.wrapper} ${className}`}
      >
        <div className={`${styles.inputWrapper} ${disabled ? styles.disabled : ''}`}>
          <input
            type="text"
            readOnly
            placeholder={placeholder}
            value={formattedDate}
            onClick={handleInputClick}
            className={styles.input}
            disabled={disabled}
          />
          <img src={calendarIcon} alt="Календарь" className={styles.icon} onClick={handleInputClick} />
        </div>

        {isOpen && (
          <div className={styles.calendarPopup}>
            <div className={styles.calendarHeader}>
              <span className={styles.month}>Апрель</span>
              <span className={styles.year}>2000</span>
            </div>
            <div className={styles.weekdays}>
              <span>Пн</span>
              <span>Вт</span>
              <span>Ср</span>
              <span>Чт</span>
              <span>Пт</span>
              <span>Сб</span>
              <span>Вс</span>
            </div>
            <div className={styles.daysGrid}>
              {/* Здесь будет логика для генерации дней месяца */}
              {/* Временная заглушка для дней */}
              {Array.from({ length: 35 }).map((_, i) => {
                const day = i + 1;
                // Пример: выделение 27-го числа
                const isSelected = day === 27;
                return (
                  <div
                    key={i}
                    className={`${styles.day} ${isSelected ? styles.selected : ''}`}
                    onClick={() => handleDateSelect(new Date(2000, 3, day))} // Пример даты
                  >
                    {day > 0 && day <= 31 ? day : ''}
                  </div>
                );
              })}
            </div>
            <div className={styles.actions}>
              <button className={styles.cancelButton} onClick={handleCancel}>
                Отменить
              </button>
              <button className={styles.selectButton} onClick={handleSelect}>
                Выбрать
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

DropDownDateBirthday.displayName = 'DropDownDateBirthday';
