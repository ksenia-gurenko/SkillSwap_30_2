import { useEffect, useState, type FC } from 'react';
import styles from './catalog.module.css';
import type { TSkill } from '../../entities/types';
import skillsData from '../../../public/db/skills.json';
import { SkillCard } from '../../widgets';
import { SectionHeader, Button } from '../../shared/ui';
import { useLocalList } from '../../shared/hooks/useLocalList';
import { LOCAL_STORAGE_KEYS } from '../../shared/lib/constants';

export const CatalogPage: FC = () => {
  const [skills, setSkills] = useState<TSkill[]>([]);
  const [likedSkills, setLikedSkills] = useLocalList<string>(LOCAL_STORAGE_KEYS.LIKED_SKILLS, []);

  useEffect(() => {
    setSkills(skillsData as unknown as TSkill[]);
  }, []);

  const handleLikeToggle = (skillId: string) => {
    setLikedSkills(prev =>
      prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  }

  const sections = [
    { title: 'Популярное', items: skills.slice(0, 3) },
    { title: 'Новое', items: skills.slice(3, 6) },
    { title: 'Рекомендуем', items: skills.slice(6, 9) }
  ];

  return (
    <main className={styles.containerMain}>
      <aside className={styles.filters}>
        <SectionHeader text='Фильтры' level='h3' />
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
                  onLikeToggle={() => handleLikeToggle(skill._id)}
                  isLiked={likedSkills.includes(skill._id)}
                  onDetailsClick={() => { }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

