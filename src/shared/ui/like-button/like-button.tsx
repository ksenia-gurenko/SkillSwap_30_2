import type { FC } from 'react';
import type { TLikeButtonUIProps } from './type';
import styles from './like-button.module.css';

export const LikeButtonUI: FC<TLikeButtonUIProps> = ({ isActive, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    <svg
      width='22'
      height='20'
      viewBox='0 0 22 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.5 1C3.46244 1 1 3.46245 1 6.5C1 12 7.5 17 11 18.1631C14.5 17 21 12 21 6.5C21 3.46245 18.5375 1 15.5 1C13.6398 1 11.9953 1.92345 11 3.3369C10.0047 1.92345 8.36015 1 6.5 1Z'
        fill={isActive ? '#ABD27A' : '#FFF'}
        stroke={isActive ? '#ABD27A' : '#253017'}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  </button>
);
