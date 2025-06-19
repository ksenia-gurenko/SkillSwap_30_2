import { useState, useRef, useEffect, forwardRef, useMemo } from 'react';
import { type DropDownDateBirthdayProps } from './types';
import styles from './dropdown-date-birthday.module.css';
import calendarIcon from './calendar.svg'; // иконка календаря
import arrowIcon from './arrow.svg'; // Новая иконка для стрелок выпадающего списка
import { Button } from '../button';
import {
  MONTH_NAMES,
  WEEKDAY_NAMES,
  DEFAULT_PLACEHOLDER,
  BIRTHDAY_LABEL
} from './constants';
import { useTransitionState } from './hooks';

/**
 * Вспомогательная функция для получения количества дней в месяце
 */
const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();

/**
 * Вспомогательная функция для получения дня недели первого дня месяца (0 - воскресенье, 1 - понедельник)
 */
const getStartDayOfMonth = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  return (date.getDay() + 6) % 7; // Делаем понедельник первым днем (0)
};

/**
 * Компонент выбора даты рождения с выпадающим календарем
 */
export const DropDownDateBirthday = forwardRef<
  HTMLDivElement,
  DropDownDateBirthdayProps
>(
  (
    {
      value,
      onChange,
      placeholder = DEFAULT_PLACEHOLDER,
      className = '',
      disabled = false
    },
    _ref
  ) => {
    // Состояния
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(value);
    const [dateInCalendarView, setDateInCalendarView] = useState<Date | null>(
      value
    );
    const [currentViewDate, setCurrentViewDate] = useState<Date>(
      value || new Date()
    );
    const [showMonthPicker, setShowMonthPicker] = useState(false);
    const [showYearPicker, setShowYearPicker] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(false);

    // Рефы
    const wrapperRef = useRef<HTMLDivElement>(null);
    const monthPickerRef = useRef<HTMLDivElement>(null);
    const yearPickerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Хуки для анимации
    const isCalendarVisible = useTransitionState(isOpen);
    const isMonthPickerVisible = useTransitionState(showMonthPicker);
    const isYearPickerVisible = useTransitionState(showYearPicker);

    // Форматирование даты
    const formattedDate = useMemo(
      () =>
        selectedDate
          ? selectedDate.toLocaleDateString('ru-RU', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            })
          : '',
      [selectedDate]
    );

    // Синхронизация с пропсами
    useEffect(() => {
      setSelectedDate(value);
      setDateInCalendarView(value);
      if (value) {
        setCurrentViewDate(value);
      }
    }, [value]);

    // Синхронизация inputValue с выбранной датой только при закрытии календаря
    useEffect(() => {
      if (!isOpen) {
        setInputValue(formattedDate);
        setInputError(false);
      }
    }, [isOpen, formattedDate]);

    // Управление фокусом
    useEffect(() => {
      if (isOpen && inputRef.current) {
        inputRef.current.focus();
      }
      if (!isOpen && inputRef.current) {
        inputRef.current.blur();
      }
    }, [isOpen]);

    // Обработчики событий
    const handleInputClick = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
        setDateInCalendarView(selectedDate);
        setCurrentViewDate(selectedDate || new Date());
        setShowMonthPicker(false);
        setShowYearPicker(false);
        setInputValue(selectedDate ? formattedDate : ''); // Показываем подтверждённую дату при открытии
      }
    };

    const handleDayClick = (date: Date) => {
      setDateInCalendarView(date);
      setInputValue(
        date
          ? date.toLocaleDateString('ru-RU', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            })
          : ''
      );
      if (inputRef.current) inputRef.current.focus();
    };

    const handleCancel = () => {
      setIsOpen(false);
      setShowMonthPicker(false);
      setShowYearPicker(false);
      setDateInCalendarView(selectedDate);
      setInputValue(formattedDate); // Сброс на подтверждённую дату
    };

    const handleSelect = () => {
      setSelectedDate(dateInCalendarView);
      onChange(dateInCalendarView);
      setIsOpen(false);
      setShowMonthPicker(false);
      setShowYearPicker(false);
      setInputValue(
        dateInCalendarView
          ? dateInCalendarView.toLocaleDateString('ru-RU', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            })
          : ''
      );
    };

    // Обработка клика вне компонента
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
          setShowMonthPicker(false);
          setShowYearPicker(false);
          setDateInCalendarView(selectedDate);
          return;
        }

        if (isOpen) {
          if (
            showMonthPicker &&
            monthPickerRef.current &&
            !monthPickerRef.current.contains(event.target as Node)
          ) {
            const monthSelectElement = wrapperRef.current?.querySelector(
              `.${styles.monthSelect}`
            );
            if (
              monthSelectElement &&
              !monthSelectElement.contains(event.target as Node)
            ) {
              setShowMonthPicker(false);
            }
          }

          if (
            showYearPicker &&
            yearPickerRef.current &&
            !yearPickerRef.current.contains(event.target as Node)
          ) {
            const yearSelectElement = wrapperRef.current?.querySelector(
              `.${styles.yearSelect}`
            );
            if (
              yearSelectElement &&
              !yearSelectElement.contains(event.target as Node)
            ) {
              setShowYearPicker(false);
            }
          }
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, showMonthPicker, showYearPicker, selectedDate]);

    // Рендер дней календаря
    const renderCalendarDays = useMemo(() => {
      const year = currentViewDate.getFullYear();
      const month = currentViewDate.getMonth();
      const startDayOfWeek = getStartDayOfMonth(year, month);
      const numDaysInMonth = getDaysInMonth(year, month);
      const totalCells = Math.ceil((numDaysInMonth + startDayOfWeek) / 7) * 7;
      const startDate = new Date(year, month, 1 - startDayOfWeek);
      const days: Date[] = [];

      for (let i = 0; i < totalCells; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        days.push(date);
      }

      return days.map((date, index) => {
        const isCurrentMonthDay = date.getMonth() === month;
        const isSelected =
          dateInCalendarView &&
          dateInCalendarView.getDate() === date.getDate() &&
          dateInCalendarView.getMonth() === date.getMonth() &&
          dateInCalendarView.getFullYear() === date.getFullYear();
        const isToday =
          date.getDate() === new Date().getDate() &&
          date.getMonth() === new Date().getMonth() &&
          date.getFullYear() === new Date().getFullYear();

        return (
          <div
            key={index}
            className={`${styles.day} ${!isCurrentMonthDay ? styles.emptyDay : ''} ${isSelected ? styles.selected : ''} ${isToday ? styles.today : ''}`}
            onClick={() => handleDayClick(date)}
          >
            {date.getDate()}
          </div>
        );
      });
    }, [currentViewDate, dateInCalendarView]);

    // Обработчики для пикеров
    const handleMonthClick = () => {
      setShowMonthPicker(!showMonthPicker);
      setShowYearPicker(false);
      if (inputRef.current) inputRef.current.focus();
    };

    const handleYearClick = () => {
      setShowYearPicker(!showYearPicker);
      setShowMonthPicker(false);
      if (inputRef.current) inputRef.current.focus();
    };

    const handleMonthSelect = (monthIndex: number) => {
      setCurrentViewDate(
        new Date(currentViewDate.getFullYear(), monthIndex, 1)
      );
      setShowMonthPicker(false);
      if (inputRef.current) inputRef.current.focus();
    };

    const handleYearSelect = (year: number) => {
      setCurrentViewDate(new Date(year, currentViewDate.getMonth(), 1));
      setShowYearPicker(false);
      if (inputRef.current) inputRef.current.focus();
    };

    // Проверка валидности даты в формате дд.мм.гггг
    const parseDate = (str: string): Date | null => {
      const match = str.match(/^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/);
      if (!match) return null;
      const day = parseInt(match[1], 10);
      const month = parseInt(match[2], 10) - 1;
      const year = parseInt(match[3], 10);
      if (year < new Date().getFullYear() - 120 || year > new Date().getFullYear()) return null;
      const date = new Date(year, month, day);
      if (
        date.getFullYear() !== year ||
        date.getMonth() !== month ||
        date.getDate() !== day
      ) {
        return null;
      }
      return date;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value.replace(/[^0-9]/g, '');
      // Автоматически расставляем точки
      if (val.length > 2 && val.length <= 4) {
        val = val.slice(0, 2) + '.' + val.slice(2);
      } else if (val.length > 4) {
        val = val.slice(0, 2) + '.' + val.slice(2, 4) + '.' + val.slice(4, 8);
      }
      setInputValue(val);

      // Поэтапный парсинг
      const now = new Date();
      let day = now.getDate();
      let month = now.getMonth();
      let year = now.getFullYear();
      const parts = val.split('.');
      if (parts[0] && parts[0].length === 2) {
        day = Math.max(1, Math.min(31, parseInt(parts[0], 10)));
      }
      if (parts[1] && parts[1].length === 2) {
        month = Math.max(0, Math.min(11, parseInt(parts[1], 10) - 1));
      }
      if (parts[2] && parts[2].length === 4) {
        year = parseInt(parts[2], 10);
      }
      const previewDate = new Date(year, month, day);
      setCurrentViewDate(previewDate);
      setDateInCalendarView(previewDate);

      // Валидация только если введена полная дата
      if (val.length === 10) {
        const parsed = parseDate(val);
        if (parsed) {
          setInputError(false);
        } else {
          setInputError(true);
        }
      } else {
        setInputError(false);
      }
    };

    // Обработчик нажатия Enter
    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !inputError && isOpen) {
        handleSelect();
      }
    };

    // Рендер компонента
    return (
      <div
        className={`${styles.wrapper} ${className}`}
        ref={(node) => {
          if (typeof _ref === 'function') {
            _ref(node);
          } else if (_ref) {
            _ref.current = node;
          }
          wrapperRef.current = node;
        }}
      >
        <div className={styles.label}>{BIRTHDAY_LABEL}</div>
        <div
          className={`${styles.inputWrapper} ${disabled ? styles.disabled : ''}`}
        >
          <input
            ref={inputRef}
            type='text'
            value={isOpen ? inputValue : formattedDate}
            placeholder={isOpen ? '' : placeholder}
            onClick={handleInputClick}
            className={styles.input}
            disabled={disabled}
            style={isOpen ? { caretColor: '#508826', borderColor: inputError ? '#ff4d4f' : undefined } : {}}
            tabIndex={0}
            onChange={isOpen ? handleInputChange : undefined}
            maxLength={10}
            onKeyDown={isOpen ? handleInputKeyDown : undefined}
          />
          <img
            src={calendarIcon}
            alt='calendar'
            className={styles.calendarIcon}
            onClick={handleInputClick}
            style={{ cursor: 'pointer' }}
            tabIndex={0}
            aria-label='Открыть календарь'
          />
        </div>

        {isCalendarVisible && (
          <div className={styles.calendarPopup}>
            <div className={styles.calendarHeader}>
              <div className={styles.monthSelect} onClick={handleMonthClick}>
                <span className={styles.monthName}>
                  {MONTH_NAMES[currentViewDate.getMonth()]}
                </span>
                <img src={arrowIcon} alt='arrow' className={styles.arrowIcon} />
              </div>
              <div className={styles.yearSelect} onClick={handleYearClick}>
                <span className={styles.yearNumber}>
                  {currentViewDate.getFullYear()}
                </span>
                <img src={arrowIcon} alt='arrow' className={styles.arrowIcon} />
              </div>
            </div>

            {showMonthPicker && (
              <div
                ref={monthPickerRef}
                className={`${styles.pickerDropdown} ${isMonthPickerVisible ? styles.pickerDropdown_open : styles.pickerDropdown_closed}`}
              >
                {MONTH_NAMES.map((month, i) => {
                  const isFutureMonth =
                    currentViewDate.getFullYear() ===
                      new Date().getFullYear() && i > new Date().getMonth();
                  return (
                    <div
                      key={month}
                      className={`${styles.pickerItem} ${currentViewDate.getMonth() === i ? styles.selectedPickerItem : ''} ${isFutureMonth ? styles.disabled : ''}`}
                      onClick={() => !isFutureMonth && handleMonthSelect(i)}
                      style={
                        isFutureMonth
                          ? { color: '#9CA197', cursor: 'not-allowed' }
                          : {}
                      }
                    >
                      {month}
                    </div>
                  );
                })}
              </div>
            )}

            {showYearPicker && (
              <div
                ref={yearPickerRef}
                className={`${styles.pickerDropdown} ${isYearPickerVisible ? styles.pickerDropdown_open : styles.pickerDropdown_closed}`}
              >
                {Array.from(
                  { length: 120 },
                  (_, i) => new Date().getFullYear() - i
                ).map((year) => (
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
              {WEEKDAY_NAMES.map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>

            <div className={styles.daysGrid}>{renderCalendarDays}</div>

            <div className={styles.actions}>
              <Button onClick={handleCancel} fill={false} width={125}>
                Отменить
              </Button>
              <Button onClick={handleSelect} fill width={125} disabled={inputError}>
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
