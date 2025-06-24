import { useState, useRef, useEffect } from 'react';
import { IconButtonUI } from '../icon/icon';
import { ICON_TYPE } from '../../lib/constants';
import styles from './checkbox-dropdown.module.css';
import checkboxEmpty from './checkbox-empty.svg';
import checkboxDone from './checkbox-done.svg';
import radioSelected from './radio-button-done.svg';
import radioEmpty from './radio-button.svg';

interface Option {
  label: string;
  value: string;
}

interface CheckboxDropdownProps {
  label?: string;
  placeholder?: string;
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  disabled?: boolean;
  multiselect?: boolean;
  className?: string;
  inputClassName?: string;
}

export const CheckboxDropdown = ({
  label,
  placeholder,
  options,
  selected,
  onChange,
  disabled = false,
  multiselect = true,
  className = '',
  inputClassName = ''
}: CheckboxDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleSelect = (value: string) => {
    if (multiselect) {
      if (selected.includes(value)) {
        onChange(selected.filter((v) => v !== value));
      } else {
        onChange([...selected, value]);
      }
    } else {
      if (selected.includes(value)) {
        onChange([]);
      } else {
        onChange([value]);
      }
    }
    setSearch('');
  };

  const filteredOptions =
    search.trim().length > 0
      ? options.filter((option) =>
          option.label.toLowerCase().includes(search.trim().toLowerCase())
        )
      : options;

  const getInputValue = () => {
    if (search.length > 0) return search;
    if (selected.length === 0) return '';

    if (multiselect) {
      return `Выбрано: ${selected.length}`;
    } else {
      const selectedOption = options?.find(
        (option) => option.value === selected[0]
      );
      return selectedOption ? selectedOption.label : '';
    }
  };

  return (
    <div className={`${styles.wrapper} ${className}`} ref={ref}>
      <div className={styles.inputWrapper}>
        {label ? <label className={styles.label}>{label}</label> : null}
        <input
          type='text'
          placeholder={placeholder || ''}
          value={getInputValue()}
          onClick={() => {
            if (!disabled) setOpen((prev) => !prev);
          }}
          onChange={(e) => {
            setSearch(e.target.value);
            if (!open && !disabled) setOpen(true);
          }}
          onKeyDown={(e) => {
            if (
              e.key === 'Backspace' &&
              search.length === 0 &&
              selected.length > 0
            ) {
              onChange([]);
            }
          }}
          className={`${styles.input} ${inputClassName}`}
          disabled={disabled}
          style={{
            border: '1px solid #69735d',
            borderRadius: '12px',
            padding: '12px 20px',
            backgroundColor: 'white',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#253017',
            width: '100%',
            boxSizing: 'border-box',
            marginBottom: '0'
          }}
        />
        <span
          className={
            open
              ? `${styles.chevronRight} ${styles.chevronOpen}`
              : styles.chevronRight
          }
          onClick={() => {
            if (!disabled) setOpen((prev) => !prev);
          }}
          tabIndex={0}
          role='button'
          aria-label='Открыть список'
          style={{ cursor: disabled ? 'default' : 'pointer' }}
        >
          <IconButtonUI type={ICON_TYPE.CHEVRON_DOWN} />
        </span>
      </div>
      {open && !disabled && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownTopLine} />
          <div className={styles.dropdownTransparentTop} />
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <label key={option.value} className={styles.option}>
                <input
                  type='checkbox'
                  checked={selected.includes(option.value)}
                  onChange={() => handleSelect(option.value)}
                  className={styles.nativeCheckbox}
                />
                <span className={styles.checkbox}>
                  {multiselect ? (
                    <img
                      src={
                        selected.includes(option.value)
                          ? checkboxDone
                          : checkboxEmpty
                      }
                      alt={
                        selected.includes(option.value)
                          ? 'Выбрано'
                          : 'Не выбрано'
                      }
                      width={24}
                      height={24}
                    />
                  ) : (
                    <img
                      src={
                        selected.includes(option.value)
                          ? radioSelected
                          : radioEmpty
                      }
                      alt={
                        selected.includes(option.value)
                          ? 'Выбрано'
                          : 'Не выбрано'
                      }
                      width={24}
                      height={24}
                    />
                  )}
                </span>
                {option.label}
              </label>
            ))
          ) : (
            <div className={styles.noMatch}>Нет совпадений</div>
          )}
        </div>
      )}
    </div>
  );
};
