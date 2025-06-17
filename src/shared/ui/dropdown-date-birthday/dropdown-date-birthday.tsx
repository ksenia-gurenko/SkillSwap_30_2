import { useState, useRef, useEffect, forwardRef, useMemo } from 'react';
import { type DropDownDateBirthdayProps } from './types';
import styles from './dropdown-date-birthday.module.css';
import calendarIcon from './calendar.svg'; // иконка календаря
import arrowIcon from './arrow.svg'; // Новая иконка для стрелок выпадающего списка
import { Button, type ButtonProps } from '../button'; // Исправленный путь импорта

/**
 * Вспомогательная функция для получения количества дней в месяце
 */
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

/**
 * Вспомогательная функция для получения дня недели первого дня месяца (0 - воскресенье, 1 - понедельник)
 */
const getStartDayOfMonth = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  return (date.getDay() + 6) % 7; // Делаем понедельник первым днем (0)
};

/**
 * Вспомогательная функция для получения названий месяцев
 */
const MONTH_NAMES = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

/**
 * Вспомогательная функция для получения названий дней недели
 */
const WEEKDAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

/**
 * Компонент DropDownDateBirthday
 * Позволяет выбрать дату рождения с помощью выпадающего календаря.
 */
export const DropDownDateBirthday = forwardRef<HTMLDivElement, DropDownDateBirthdayProps>(
  ({ value, onChange, placeholder = 'дд.мм.гггг', className = '', disabled = false }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(value);
    const [currentViewDate, setCurrentViewDate] = useState<Date>(value || new Date()); // Дата для отображения календаря
    const [showMonthPicker, setShowMonthPicker] = useState(false);
    const [showYearPicker, setShowYearPicker] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const monthPickerRef = useRef<HTMLDivElement>(null);
    const yearPickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setSelectedDate(value);
      if (value) {
        setCurrentViewDate(value);
      }
    }, [value]);

    const handleInputClick = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
        setShowMonthPicker(false); // Закрываем пикеры при открытии/закрытии основного календаря
        setShowYearPicker(false);
      }
    };

    const handleDateSelect = (date: Date) => {
      setSelectedDate(date);
      onChange(date);
      setIsOpen(false);
    };

    const handleCancel = () => {
      setIsOpen(false);
      setShowMonthPicker(false);
      setShowYearPicker(false);
    };

    const handleSelect = () => {
      setIsOpen(false);
      setShowMonthPicker(false);
      setShowYearPicker(false);
    };

    // Закрытие календаря и пикеров при клике вне компонента
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setShowMonthPicker(false);
          setShowYearPicker(false);
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

    // Логика для генерации дней календаря
    const renderCalendarDays = useMemo(() => {
      const year = currentViewDate.getFullYear();
      const month = currentViewDate.getMonth(); // 0-11 (Январь - 0, Декабрь - 11)

      const firstDayOfMonth = new Date(year, month, 1);
      const startDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7; // День недели первого дня месяца (0=Пн, 6=Вс)
      const numDaysInMonth = getDaysInMonth(year, month); // Получаем количество дней в текущем месяце

      // Вычисляем общее количество ячеек, чтобы включить дни предыдущего месяца и текущего месяца,
      // а затем дополнить до конца последней недели.
      const totalCells = Math.ceil((numDaysInMonth + startDayOfWeek) / 7) * 7;

      const days: Date[] = [];

      // Начинаем с дня, который является первым днем для отображения в сетке
      // Это может быть день из предыдущего месяца
      const startDate = new Date(year, month, 1 - startDayOfWeek);

      for (let i = 0; i < totalCells; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        days.push(date);
      }

      return days.map((date, index) => {
        const isCurrentMonthDay = date.getMonth() === month;
        const isSelected = selectedDate &&
                           selectedDate.getDate() === date.getDate() &&
                           selectedDate.getMonth() === date.getMonth() &&
                           selectedDate.getFullYear() === date.getFullYear();
        const isToday = date.getDate() === new Date().getDate() &&
                        date.getMonth() === new Date().getMonth() &&
                        date.getFullYear() === new Date().getFullYear();

        return (
          <div
            key={index}
            className={`${styles.day} ${!isCurrentMonthDay ? styles.emptyDay : ''} ${isSelected ? styles.selected : ''} ${isToday ? styles.today : ''}`}
            onClick={() => handleDateSelect(date)}
          >
            {date.getDate()}
          </div>
        );
      });
    }, [currentViewDate, selectedDate, handleDateSelect]);

    const handleMonthClick = () => {
      setShowMonthPicker(!showMonthPicker);
      setShowYearPicker(false); // Закрываем пикер года при открытии пикера месяца
    };

    const handleYearClick = () => {
      setShowYearPicker(!showYearPicker);
      setShowMonthPicker(false); // Закрываем пикер месяца при открытии пикера года
    };

    const handleMonthSelect = (monthIndex: number) => {
      setCurrentViewDate(new Date(currentViewDate.getFullYear(), monthIndex, 1));
      setShowMonthPicker(false);
    };

    const handleYearSelect = (year: number) => {
      setCurrentViewDate(new Date(year, currentViewDate.getMonth(), 1));
      setShowYearPicker(false);
    };

    const currentYear = new Date().getFullYear(); // Получаем текущий год
    const startYear = 1890;
    const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i); // Года от 1890 до текущего

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
        <span className={styles.label}>Дата рождения</span>
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
                <div className={styles.monthSelect}>
                    <span className={styles.monthName} onClick={handleMonthClick}>{MONTH_NAMES[currentViewDate.getMonth()]}</span>
                    <img src={arrowIcon} alt="Выбрать месяц" className={styles.arrowIcon} onClick={handleMonthClick} />
                </div>
                <div className={styles.yearSelect}>
                    <span className={styles.yearNumber} onClick={handleYearClick}>{currentViewDate.getFullYear()}</span>
                    <img src={arrowIcon} alt="Выбрать год" className={styles.arrowIcon} onClick={handleYearClick} />
                </div>
            </div>
            {showMonthPicker && (
                <div ref={monthPickerRef} className={styles.pickerDropdown}>
                    {MONTH_NAMES.map((month, index) => (
                        <div
                            key={month}
                            className={`${styles.pickerItem} ${currentViewDate.getMonth() === index ? styles.selectedPickerItem : ''}`}
                            onClick={() => handleMonthSelect(index)}
                        >
                            {month}
                        </div>
                    ))}
                </div>
            )}
            {showYearPicker && (
                <div ref={yearPickerRef} className={styles.pickerDropdown}>
                    {years.map(year => (
                        <div
                            key={year}
                            className={`${styles.pickerItem} ${currentViewDate.getFullYear() === year ? styles.selectedPickerItem : ''}`}
                            onClick={() => handleYearSelect(year)}
                        >
                                {year}
                        </div>
                    ))}
                </div>
            )}
            <div className={styles.weekdays}>
              {WEEKDAY_NAMES.map(name => <span key={name}>{name}</span>)}
            </div>
            <div className={styles.daysGrid}>
              {renderCalendarDays}
            </div>
            <div className={styles.actions}>
              <Button onClick={handleCancel} fill={false} width={125}>
                Отменить
              </Button>
              <Button onClick={handleSelect} fill={true} width={125}>
                Выбрать
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

DropDownDateBirthday.displayName = 'DropDownDateBirthday';
