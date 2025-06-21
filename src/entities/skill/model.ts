export interface Skill {
  _id: string;
  title: string;
  description: string;
  category: string;
  isAvailable: boolean;
  
  user: {
    _id: string;
    avatar: string;
    name: string;
    city: string;
    age: number | string;
  };
  
  canTeach: string[];
  wantsToLearn: string[];
}