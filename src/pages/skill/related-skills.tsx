import type { Skill } from '../../entities/skill/model';
import { SkillCard } from '../../widgets/skill-card'; 
import type { TSkillCardProps } from '../../widgets/skill-card/type'; 

export const RelatedSkills = ({ skills }: { skills: Skill[] }) => {
  const convertToCardProps = (skill: Skill): TSkillCardProps & { compact?: boolean } => ({
    user: {
      avatar: skill.user.avatar,
      name: skill.user.name,
      city: skill.user.city || 'Город не указан',
      age: typeof skill.user.age === 'string' ? parseInt(skill.user.age) || 0 : skill.user.age || 0
    },
    canTeach: skill.canTeach || [],
    wantsToLearn: skill.wantsToLearn || [],
    onLikeToggle: () => {},
    isLiked: false,
    onDetailsClick: () => {},
    compact: true
  });

  return (
    <>
      {skills.map((skill) => (
        <SkillCard key={skill._id} {...convertToCardProps(skill)} />
      ))}
    </>
  );
};