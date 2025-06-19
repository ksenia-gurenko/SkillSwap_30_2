import { useState } from "react";
import type {FC} from "react";
import type { SearchInputProps } from "./searchBar.types.ts";
import styles from './searchBar.module.css';
import searchIcon from './search.svg';
import crossIcon from '../button/cross.svg';

export const SearchInput: FC<SearchInputProps> = ({ placeholder = 'Искать навык' }) => {
    const [value, setValue] = useState('');

    return (
        <div className={styles.wrapper}>
            <img src={searchIcon} alt="Поиск" className={styles.icon} />
            <input
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {value && (
                <button
                    type="button"
                    className={styles.clear}
                    onClick={() => setValue('')}
                >
                    <img src={crossIcon} alt="Очистить" className={styles.icon} />
                </button>
            )}
        </div>
    );
};