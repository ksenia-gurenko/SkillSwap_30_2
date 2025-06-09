import type { FC } from 'react';
import type { TUserAvatarUIProps } from './type';
import { USER_AVATAR_SIZE } from '../../lib/constants';
import styles from './user-avatar.module.css';

export const UserAvatarUI: FC<TUserAvatarUIProps> = ({
  src,
  size = USER_AVATAR_SIZE.MEDIUM
}) => {
  return (
    <div
      className={`${styles.avatar} ${styles[size]}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
};
