import type { FC } from 'react';
import type { TUserInfoUIProps } from './type';
import styles from './user-info.module.css';
import { UserAvatarUI } from '../user-avatar';
import { USER_AVATAR_SIZE } from '../../lib/constants';
import { formatYears } from '../../lib/utils';

export const UserInfoUI: FC<TUserInfoUIProps> = ({ src, name, city, age }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <UserAvatarUI src={src} size={USER_AVATAR_SIZE.MEDIUM} />
      </div>
      <div className={styles.textInfo}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>
          {city}, {formatYears(age)}
        </div>
      </div>
    </div>
  );
};
