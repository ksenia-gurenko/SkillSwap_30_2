import type { FC } from 'react';
import type { TAppHeaderUIProps } from './type';
import { NavLink } from 'react-router-dom';
import styles from './app-header.module.css';
import { LogoUI } from '../logo';
import { Button } from '../button';
import { LikeButtonUI } from '../like-button';
import { UserAvatarUI } from '../user-avatar';
import { USER_AVATAR_SIZE } from '../../lib/constants';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({
  isAuth,
  userName,
  userAvatarUrl,
  isCompact = false
}) => {
  if (isCompact) {
    return (
      <header className={styles.header}>
        <div className={styles.left}>
          <LogoUI />
        </div>
        <div className={styles.right}>
          <Button width={147} color='#fff' withoutBorder={true}>
            Закрыть
          </Button>
        </div>
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <LogoUI />
        <nav className={styles.nav}>
          <NavLink
            to='/'
            className={styles.navLink}>
            О проекте
          </NavLink>
          <div className={styles.dropdown}>
            <span>Все навыки</span>
            <span className={styles.arrowDown}>▼</span>
          </div>
        </nav>
      </div>

      <div className={styles.center}>
        <div className={styles.searchBar}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.53491 19.0698C4.27908 19.0698 0 14.7907 0 9.53491C0 4.27908 4.27908 0 9.53491 0C14.7907 0 19.0698 4.27908 19.0698 9.53491C19.0698 14.7907 14.7907 19.0698 9.53491 19.0698ZM9.53491 1.39535C5.04187 1.39535 1.39535 5.05118 1.39535 9.53491C1.39535 14.0186 5.04187 17.6745 9.53491 17.6745C14.0279 17.6745 17.6745 14.0186 17.6745 9.53491C17.6745 5.05118 14.0279 1.39535 9.53491 1.39535Z" fill="#69735D" />
            <path d="M19.3024 19.9996C19.1257 19.9996 18.9489 19.9345 18.8094 19.7949L16.9489 17.9345C16.6791 17.6647 16.6791 17.2182 16.9489 16.9484C17.2187 16.6787 17.6652 16.6787 17.935 16.9484L19.7954 18.8089C20.0652 19.0787 20.0652 19.5252 19.7954 19.7949C19.6559 19.9345 19.4791 19.9996 19.3024 19.9996Z" fill="#69735D" />
          </svg>
          <input type='text' placeholder='Искать навык' className={styles.searchInput} />
        </div>
      </div>

      <div className={styles.right}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.4255 20C10.2674 20 10.1092 20 9.95112 19.9907C4.74232 19.7582 0.389249 15.5632 0.0264936 10.4474C-0.289755 6.05715 2.24954 1.95522 6.34216 0.234459C7.50484 -0.249215 8.11874 0.122842 8.37918 0.392583C8.63962 0.653023 9.00237 1.25762 8.5187 2.36449C8.09083 3.35044 7.8769 4.4015 7.8862 5.48047C7.90481 9.601 11.3277 13.0983 15.5041 13.2658C16.1087 13.2937 16.704 13.2472 17.2806 13.1448C18.5084 12.9216 19.02 13.4146 19.2153 13.7308C19.4107 14.0471 19.6339 14.7261 18.8898 15.7306C16.9179 18.4281 13.7833 20 10.4255 20ZM1.41241 10.3451C1.72866 14.7726 5.50504 18.4002 10.0069 18.5955C13.0671 18.7443 15.9691 17.3491 17.755 14.9121C17.8945 14.7168 17.9597 14.5773 17.9876 14.5029C17.9038 14.4936 17.755 14.4843 17.5225 14.5308C16.8435 14.6517 16.1366 14.6982 15.439 14.6703C10.5278 14.475 6.50959 10.3544 6.48169 5.49907C6.48169 4.21547 6.73283 2.97838 7.2444 1.8157C7.33742 1.61107 7.35602 1.47155 7.36532 1.39714C7.28161 1.39714 7.13279 1.41574 6.89095 1.51806C3.3471 3.00629 1.15197 6.55943 1.41241 10.3451Z" fill="#253017" />
        </svg>
        {isAuth ? (
          <>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.527 12.493C1.3353 13.7476 2.1912 14.6179 3.2388 15.0517C7.2555 16.7167 12.8445 16.7167 16.8612 15.0517C17.9088 14.6179 18.7647 13.7467 18.573 12.493C18.456 11.7217 17.8737 11.08 17.4426 10.4527C16.8783 9.6211 16.8225 8.7148 16.8216 7.75C16.8225 4.0222 13.7913 1 10.05 1C6.3087 1 3.2775 4.0222 3.2775 7.75C3.2775 8.7148 3.2217 9.622 2.6565 10.4527C2.2263 11.08 1.6449 11.7217 1.527 12.493Z" stroke="#253017" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.4502 16.3C6.8624 17.8525 8.3186 19 10.0502 19C11.7827 19 13.2371 17.8525 13.6502 16.3" stroke="#253017" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <LikeButtonUI isActive={false} onClick={() => { }} />
            <span className={styles.userName}>{userName}</span>
            <UserAvatarUI src={userAvatarUrl ?? ''} size={USER_AVATAR_SIZE.SMALL} />
          </>
        ) : (
          <>
            <Button>Войти</Button>
            <Button>Зарегистрироваться</Button>
          </>
        )}
      </div>

    </header>);
};
