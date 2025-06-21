import type { FC } from 'react';
import type { TAppHeaderUIProps } from './type';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './app-header.module.css';
import { LogoUI } from '../logo';
import { Button } from '../button';
import { UserAvatarUI } from '../user-avatar';
import { ICON_TYPE, USER_AVATAR_SIZE } from '../../lib/constants';
import { IconButtonUI } from '../icon';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({
  isAuth,
  userName,
  userAvatarUrl,
  isCompact = false,
  bgColor
}) => {
  const location = useLocation();

  if (isCompact) {
    return (
      <header
        className={styles.header}
        style={{ backgroundColor: bgColor ? bgColor : undefined }}
      >
        <div className={styles.left}>
          <Link to='/'>
            <LogoUI />
          </Link>
        </div>
        <div className={styles.right}>
          <Button width={147} variant='close'>
            Закрыть
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
        <Link to='/'>
          <LogoUI />
        </Link>

        <nav className={styles.nav}>
          <NavLink to='/' className={styles.navLink}>
            О проекте
          </NavLink>
          <div className={styles.dropdown}>
            <span className={styles.navLink}>Все навыки</span>
            <span className={styles.arrowDown}>
              <IconButtonUI type={ICON_TYPE.CHEVRON_DOWN} />
            </span>
          </div>
        </nav>
      </div>

      <div className={styles.center}>
        <div className={styles.searchBar}>
          <IconButtonUI type={ICON_TYPE.SEARCH} />
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
              <IconButtonUI type={ICON_TYPE.MOON} />
              <IconButtonUI type={ICON_TYPE.NOTIFICATION} />
              <Link to='/favorites'>
                <IconButtonUI
                  type={ICON_TYPE.LIKE}
                  isActive={location.pathname.startsWith('/favorites')}
                />
              </Link>
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
            <div className={styles.moonIcon}>
              <IconButtonUI type={ICON_TYPE.MOON} />
            </div>
            <div className={styles.rightButtons}>
              <Link to='/login'>
                <Button width={92}>Войти</Button>
              </Link>

              <Link to='/registration'>
                <Button width={208} fill>
                  Зарегистрироваться
                </Button>

              </Link>

            </div>
          </>
        )}
      </div>
    </header>
  );
};
