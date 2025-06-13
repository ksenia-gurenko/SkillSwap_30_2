import type { FC } from "react";
import type { TSkillCardProps } from "./type";
import styles from "./skill-card.module.css";
import { Badge, Button, IconButtonUI, Tag, UserInfoUI } from "../../shared/ui";
import { ICON_TYPE } from "../../shared/lib/constants";

export const SkillCard: FC<TSkillCardProps> = ({
    user,
    canTeach,
    wantsToLearn,
    onLikeToggle,
    isLiked,
    onDetailsClick
}) => {
    const MAX_VISIBLE_TAGS = 2;
    const visibleTags = wantsToLearn.slice(0, MAX_VISIBLE_TAGS);
    const hiddenTagsCount = wantsToLearn.length - MAX_VISIBLE_TAGS;

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <UserInfoUI
                    src={user.avatar}
                    name={user.name}
                    city={user.city}
                    age={user.age}
                />
                <IconButtonUI
                    type={ICON_TYPE.LIKE}
                    onClick={onLikeToggle}
                />
            </div>
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Может научить:</div>
                <div className={styles.tags}>
                    {canTeach.map((skill) => (
                        <Tag key={skill} text={skill} backgroundColor="#F7E4EB" />
                    ))}
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Хочет научиться:</div>
                <div className={styles.tags}>
                    {visibleTags.map((skill) => (
                        <Tag key={skill} text={skill} />
                    ))}
                    {hiddenTagsCount > 0 && <Badge count={hiddenTagsCount} />}
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <Button width={284} fill onClick={onDetailsClick}>
                    Подробнее
                </Button>
            </div>
        </div>
    );
}