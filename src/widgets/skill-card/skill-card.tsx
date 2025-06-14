import { type FC } from 'react';
import type { TSkillCardProps } from './type';
import styles from './skill-card.module.css';
import { Button, IconButtonUI, UserInfoUI } from '../../shared/ui';
import { ICON_TYPE } from '../../shared/lib/constants';
import { OverflowTags } from '../overflow-tags';

export const SkillCard: FC<TSkillCardProps> = ({
  user,
  canTeach,
  wantsToLearn,
  onLikeToggle,
  isLiked,
  onDetailsClick
}) => {

  const contentWidth = 284;

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <UserInfoUI
            src={user.avatar}
            name={user.name}
            city={user.city}
            age={user.age}
          />
          <IconButtonUI type={ICON_TYPE.LIKE} isActive={isLiked} onClick={onLikeToggle} />
        </div>

        <div className={styles.skills}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Может научить:</div>
            <div className={styles.tags}>
              <OverflowTags items={canTeach} containerWidth={contentWidth} gap={8} />
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Хочет научиться:</div>
            <div className={styles.tags}>
              <OverflowTags items={wantsToLearn} containerWidth={contentWidth} gap={8} />
            </div>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Button width={contentWidth} fill onClick={onDetailsClick}>
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
};
