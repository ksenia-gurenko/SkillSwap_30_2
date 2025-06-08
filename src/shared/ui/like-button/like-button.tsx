import type { FC } from 'react';
import type { TLikeButtonUIProps } from './type';
import styles from './like-button.module.css';

export const LikeButtonUI: FC<TLikeButtonUIProps> = ({ isActive, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {isActive ? (
        <svg
          width='22'
          height='20'
          viewBox='0 0 22 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.5 1C3.46244 1 1 3.46245 1 6.5C1 12 7.5 17 11 18.1631C14.5 17 21 12 21 6.5C21 3.46245 18.5375 1 15.5 1C13.6398 1 11.9953 1.92345 11 3.3369C10.0047 1.92345 8.36015 1 6.5 1Z'
            fill='#ABD27A'
            stroke='#ABD27A'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      ) : (
        <svg
          width='20'
          height='18'
          viewBox='0 0 20 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 17.9535C9.71163 17.9535 9.43256 17.9163 9.2 17.8326C5.64651 16.614 0 12.2884 0 5.89767C0 2.64186 2.63256 0 5.86977 0C7.44186 0 8.91163 0.613954 10 1.71163C11.0884 0.613954 12.5581 0 14.1302 0C17.3674 0 20 2.65116 20 5.89767C20 12.2977 14.3535 16.614 10.8 17.8326C10.5674 17.9163 10.2884 17.9535 10 17.9535ZM5.86977 1.39535C3.40465 1.39535 1.39535 3.41395 1.39535 5.89767C1.39535 12.2512 7.50698 15.786 9.65581 16.5209C9.82326 16.5767 10.186 16.5767 10.3535 16.5209C12.493 15.786 18.614 12.2605 18.614 5.89767C18.614 3.41395 16.6047 1.39535 14.1395 1.39535C12.7256 1.39535 11.414 2.05581 10.5674 3.2C10.307 3.55349 9.71163 3.55349 9.45116 3.2C8.58605 2.04651 7.28372 1.39535 5.86977 1.39535Z'
            fill='#253017'
          />
        </svg>
      )}
    </button>
  );
};
