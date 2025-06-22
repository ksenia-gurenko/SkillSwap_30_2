export type TSkillCardProps = {
  user: {
    avatar: string;
    name: string;
    city: string;
    age: number;
  };
  canTeach: string[];
  wantsToLearn: string[];
  onLikeToggle?: () => void;
  isLiked?: boolean;
  onDetailsClick?: () => void;
  isCompact?: boolean;
};
