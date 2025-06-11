import type { FC } from 'react';
import type { TAppHeaderUIProps } from './type';
import { NavLink } from 'react-router-dom';
import styles from './app-header.module.css';
import { LogoUI } from '../logo';
import { Button } from '../button';
import { LikeButtonUI } from '../like-button';
import { UserAvatarUI } from '../user-avatar';
import { USER_AVATAR_SIZE } from '../../lib/constants';
import {
  SearchIconUI,
  MoonIconUI,
  NotificationIconUI,
  CrossIconUI,
  ChevronDownIconUI
} from '../icons';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({
  isAuth,
  userName,
  userAvatarUrl,
  isCompact = false,
  bgColor
}) => {
  if (isCompact) {
    return (
      <header
        className={styles.header}
        style={{ backgroundColor: bgColor ? bgColor : undefined }}
      >
        <div className={styles.left}>
          <LogoUI />
        </div>
        <div className={styles.right}>
          <Button width={147} color='#fff' withoutBorder>
            Закрыть{' '}
            <span>
              <CrossIconUI />
            </span>
          </Button>
        </div>
      </header>
    );
  }

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: bgColor ? bgColor : undefined }}
    >
      <div className={styles.left}>
        <LogoUI />
        <nav className={styles.nav}>
          <NavLink to='/' className={styles.navLink}>
            О проекте
          </NavLink>
          <div className={styles.dropdown}>
            <span className={styles.navLink}>Все навыки</span>
            <span className={styles.arrowDown}>
              <ChevronDownIconUI />
            </span>
          </div>
        </nav>
      </div>

      <div className={styles.center}>
        <div className={styles.searchBar}>
          <SearchIconUI />
          <input
            type='text'
            placeholder='Искать навык'
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.right}>
        {isAuth ? (
          <>
            <div className={styles.icons}>
              <MoonIconUI />
              <NotificationIconUI />
              <LikeButtonUI isActive={false} onClick={() => {}} />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>{userName}</span>
              <UserAvatarUI
                src={userAvatarUrl ?? ''}
                size={USER_AVATAR_SIZE.SMALL}
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles.moon}>
              <MoonIconUI />
            </div>
            <div className={styles.rightButtons}>
              <Button width={92}>Войти</Button>
              <Button width={208} fill>
                Зарегистрироваться
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
