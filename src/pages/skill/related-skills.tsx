import type { Skill } from '../../entities/skill/model';
import { SkillCard } from '../../widgets/skill-card'; 
import type { TSkillCardProps } from '../../widgets/skill-card/type'; 
import styles from './styles.module.css';

export const RelatedSkills = ({ skills }: { skills: Skill[] }) => {
  const convertToCardProps = (skill: Skill): TSkillCardProps & { compact?: boolean } => ({
    user: {
      avatar: skill.user.avatar, // Используем user.avatar вместо author.avatarUrl
      name: skill.user.name,
      city: skill.user.city || 'Город не указан',
      age: typeof skill.user.age === 'string' ? parseInt(skill.user.age) || 0 : skill.user.age || 0
    },
    canTeach: skill.canTeach || [], // Используем реальные данные canTeach
    wantsToLearn: skill.wantsToLearn || [], // Используем реальные данные wantsToLearn
    onLikeToggle: () => {},
    isLiked: false,
    onDetailsClick: () => {},
    compact: true
  });

  return (
    <div className={styles.related}>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <SkillCard 
            key={skill._id} // Используем _id вместо id
            {...convertToCardProps(skill)} 
          />
        ))}
      </div>
    </div>
  );
};