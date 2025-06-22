export type RegistrationData = {
  email: string;
  password: string;
  name: string;
  birthDate: Date;
  gender: string;
  city: string;
  learnCategory: string;
  learnSubcategory: string;
  skillName: string;
  skillCategory: '';
  skillSubcategory: '';
  skillDescription: string;
  skillImages: File[] | null
};