export type TSkill = {
    _id: string,
    user: TUser,
    title: string,
    description: string,
    category: string,
    subcategory: string,
    canTeach: string[],
    wantsToLearn: string[]
}

export type TUser = {
    _id: string,
    avatar: string,
    name: string,
    city: string,
    age: number,
    gender: string
}

export type TAppState = {
    currentUser: TUser | null;
    isAuth: boolean;
    favorites: TSkill[];
    allSkillCards: TSkill[];
}
