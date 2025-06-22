import { type FC } from 'react';
import styles from './catalog.module.css';
import type { TSkill } from '../../entities/types';
import { SkillCard } from '../../widgets';
import { SectionHeader, Button, CheckboxDropdown, RadioButtonUI } from '../../shared/ui';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../../entities/app-state-context/useAppState';
import { ACTION_TYPE } from '../../shared/lib/constants';
import { GENDER } from '../../shared/ui/checkbox-dropdown/constants';

export const CatalogPage: FC = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAppState();

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

  const sections = [
    { title: 'Популярное', items: state.allSkillCards || [] },
  ];

  return (
    <main className={styles.containerMain}>
      <aside className={styles.filters}>
        <SectionHeader text='Фильтры' level='h3' />
        <div className={styles.filterSection}>
          <SectionHeader text='Пол автора' level='h4' />
          
        </div>

      </aside>
      <div className={styles.catalogContent}>
        {sections.map(section => (
          <div key={section.title} className={styles.section}>
            <div className={styles.sectionHeader}>
              <SectionHeader text={section.title} />
              <Button variant='view-all' width={187}>Смотреть все</Button>
            </div>
            <div className={styles.cardGrid}>
              {section.items.map((skill, index) => (
                <SkillCard
                  key={index}
                  user={skill.user}
                  canTeach={skill.canTeach}
                  wantsToLearn={skill.wantsToLearn}
                  onLikeToggle={() => handleLikeToggle(skill)}
                  isLiked={state.favorites.some(fav => fav._id === skill._id)}
                  onDetailsClick={() => { navigate(`/skill/${skill._id}`) }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

