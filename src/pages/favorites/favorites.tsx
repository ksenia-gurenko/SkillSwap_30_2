import { useEffect, useState, type FC } from 'react';
import styles from './favorites.module.css';
import { SkillCard } from '../../widgets';
import { SectionHeader, Button } from '../../shared/ui';
import { useLocalList } from '../../shared/hooks/useLocalList';
import { LOCAL_STORAGE_KEYS } from '../../shared/lib/constants';
import type { TSkill } from '../../entities/types';
import skillsData from '../../../public/db/skills.json';

export const FavoritesPage: FC = () => {
    const [likedSkills, setLikedSkills] = useLocalList<string>(LOCAL_STORAGE_KEYS.LIKED_SKILLS, []);
    const [allSkills, setAllSkills] = useState<TSkill[]>([]);

    useEffect(() => {
        setAllSkills(skillsData as unknown as TSkill[]);
    }, []);

    const favoriteSkills = allSkills.filter(skill =>
        likedSkills.includes(skill._id)
    );

    const handleLikeToggle = (skillId: string) => {
        setLikedSkills(prev =>
            prev.includes(skillId)
                ? prev.filter(id => id !== skillId)
                : [...prev, skillId]
        );
    }

    return (
        <main className={styles.containerMain}>
            <aside className={styles.filters}>
                <SectionHeader text='Фильтры' level='h3' />
            </aside>
            <div className={styles.catalogContent}>
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <SectionHeader text='Избранное' />
                        <Button variant='view-all' width={187}>Смотреть все</Button>
                    </div>

                    {favoriteSkills.length > 0 ? (
                        <div className={styles.cardGrid}>
                            {favoriteSkills.map(skill => (
                                <SkillCard
                                    key={skill._id}
                                    user={skill.user}
                                    canTeach={skill.canTeach}
                                    wantsToLearn={skill.wantsToLearn}
                                    onLikeToggle={() => handleLikeToggle(skill._id)}
                                    isLiked
                                    onDetailsClick={() => { }}
                                />
                            ))}
                        </div>
                    ) : (
                        <SectionHeader text='У вас пока нет избранных навыков' level='h3' />
                    )}
                </div>
            </div>
        </main>
    );
}