import type { Skill } from '../../entities/skill/model';
import { SkillCard } from '../../widgets/skill-card'; 
import type { TSkillCardProps } from '../../widgets/skill-card/type'; 
import styles from './styles.module.css';

export const RelatedSkills = ({ skills }: { skills: Skill[] }) => {
  const convertToCardProps = (skill: Skill): TSkillCardProps & { compact?: boolean } => ({
    user: {
      avatar: skill.author.avatarUrl || '',
      name: skill.author.name,
      city: skill.author.city || 'Город не указан',
      age: skill.author.age || 0
    },
    canTeach: [], // Пустой массив, чтобы скрыть блок "Может научить"
    wantsToLearn: [], // Пустой массив, чтобы скрыть блок "Хочет научиться"
    onLikeToggle: () => {},
    isLiked: false,
    onDetailsClick: () => {},
    compact: true
  });

  return (
    <div className={styles.related}>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...convertToCardProps(skill)} />
        ))}
      </div>
    </div>
  );
};