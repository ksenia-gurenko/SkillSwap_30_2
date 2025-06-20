export interface Skill {
  id: string;
  title: string;
  description: string;
  category: string;
  isAvailable: boolean;
  author: {
    name: string;
    avatarUrl?: string;
    city?: string;
    age?: number;
  };
  wantsToLearn?: string[];
}