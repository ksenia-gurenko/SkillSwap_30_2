import { useNavigate } from 'react-router-dom';
import type { TSkill } from '../../entities/types';
import { SkillCard } from '../../widgets/skill-card';
import type { TSkillCardProps } from '../../widgets/skill-card/type';
import { useAppState } from '../../entities/app-state-context/useAppState';
import { ACTION_TYPE } from '../../shared/lib/constants';

export const RelatedSkills = ({ skills }: { skills: TSkill[] }) => {
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
          onLikeToggle={() => handleLikeToggle(skill)}
          isLiked={state.favorites.some(fav => fav._id === skill._id)}
          onDetailsClick={() => { navigate(`/skill/${skill._id}`) }}
        />
      ))}
    </>
  );
};