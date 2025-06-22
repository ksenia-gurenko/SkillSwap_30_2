import { type FC } from 'react';
import styles from './favorites.module.css';
import { SkillCard } from '../../widgets';
import { SectionHeader, Button } from '../../shared/ui';
import type { TSkill } from '../../entities/types';
import { useAppState } from '../../entities/app-state-context/useAppState';
import { useNavigate } from 'react-router-dom';
import { ACTION_TYPE } from '../../shared/lib/constants';

export const FavoritesPage: FC = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useAppState();
    const favoriteSkills = state.favorites;

    const handleLikeToggle = (skill: TSkill) => {
        if (!state.isAuth) {
            navigate('/login');
            return;
        }

        if (state.favorites.some(fav => fav._id === skill._id)) {
            dispatch({ type: ACTION_TYPE.REMOVE_FAVORITE, payload: skill._id });
        } else {
            dispatch({ type: ACTION_TYPE.ADD_FAVORITE, payload: skill });
        }
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
                                    onLikeToggle={() => handleLikeToggle(skill)}
                                    isLiked
                                    onDetailsClick={() => { navigate(`/skill/${skill._id}`) }}
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