import { useNavigate } from 'react-router-dom';
import type { TSkill } from '../../entities/types';
import { SkillCard } from '../../widgets/skill-card';
import type { TSkillCardProps } from '../../widgets/skill-card/type';

export const RelatedSkills = ({ skills }: { skills: TSkill[] }) => {
  const navigate = useNavigate();

  const convertToCardProps = (skill: TSkill): TSkillCardProps & { compact?: boolean } => ({
    user: {
      avatar: skill.user.avatar,
      name: skill.user.name,
      city: skill.user.city || 'Город не указан',
      age: typeof skill.user.age === 'string' ? parseInt(skill.user.age) || 0 : skill.user.age || 0
    },
    canTeach: skill.canTeach || [],
    wantsToLearn: skill.wantsToLearn || [],
    onLikeToggle: () => { },
    isLiked: false,
    onDetailsClick: () => { },
    compact: true
  });

  return (
    <>
      {skills.map((skill) => (
        <SkillCard
          key={skill._id} {...convertToCardProps(skill)}
          onDetailsClick={() => { navigate(`/skill/${skill._id}`) }}
        />
      ))}
    </>
  );
};