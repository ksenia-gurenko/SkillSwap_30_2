export type TSkill = {
    _id: string,
    user: TUser,
    title: string,
    description: string,
    category: string,
    canTeach: string[],
    wantsToLearn: string[]
}

export type TUser = {
    _id: string,
    avatar: string,
    name: string,
    city: string,
    age: number,
    gender: string,
}

export type TAppState = {
    currentUser: TUser | null;
    isAuth: boolean;
    users: TUser[],
    favorites: TSkill[];
    allSkillCards: TSkill[];
}
