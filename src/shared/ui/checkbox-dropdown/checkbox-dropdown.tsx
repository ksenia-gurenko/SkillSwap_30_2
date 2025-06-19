import { useState, useRef, useEffect } from 'react';
import { Input } from '../input';
import { IconButtonUI } from '../icon/icon';
import { ICON_TYPE } from '../../lib/constants';
import styles from './checkbox-dropdown.module.css';
import checkboxEmpty from './checkbox-empty.svg';
import checkboxDone from './checkbox-done.svg';

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
  type?: 'category' | 'subcategory';
}

export const CheckboxDropdown = ({
  label,
  placeholder,
  options,
  selected,
  onChange,
  disabled = false,
  type = 'category',
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
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
    setSearch('');
  };

  const defaultLabel = type === 'category' ? 'Категория навыка, которому хотите научиться' : 'Подкатегория навыка, которому хотите научиться';
  const defaultPlaceholder = type === 'category' ? 'Выберите категорию' : 'Выберите подкатегорию навыка';

  const filteredOptions = search.trim().length > 0
    ? options.filter(option => option.label.toLowerCase().includes(search.trim().toLowerCase()))
    : options;

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.inputWrapper}>
        <Input
          label={label ?? defaultLabel}
          placeholder={placeholder ?? defaultPlaceholder}
          value={
            search.length > 0
              ? search
              : (
                  selected.length === 0
                    ? ''
                    : `Выбрано: ${selected.length}`
                )
          }
          onClick={() => {
            if (!disabled) setOpen((prev) => !prev);
          }}
          onChange={e => {
            setSearch(e.target.value);
            if (!open && !disabled) setOpen(true);
          }}
          onKeyDown={e => {
            if (e.key === 'Backspace' && search.length === 0 && selected.length > 0) {
              onChange([]);
            }
          }}
          className={styles.input}
          disabled={disabled}
        />
        <span
          className={open ? `${styles.chevronRight} ${styles.chevronOpen}` : styles.chevronRight}
          onClick={() => {
            if (!disabled) setOpen((prev) => !prev);
          }}
          tabIndex={0}
          role="button"
          aria-label="Открыть список"
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
                  type="checkbox"
                  checked={selected.includes(option.value)}
                  onChange={() => handleSelect(option.value)}
                  className={styles.nativeCheckbox}
                />
                <span className={styles.checkbox}>
                  <img
                    src={selected.includes(option.value) ? checkboxDone : checkboxEmpty}
                    alt={selected.includes(option.value) ? 'Выбрано' : 'Не выбрано'}
                    width={24}
                    height={24}
                  />
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