export type TSkill = {
    _id: string,
    user: TUser,
    canTeach: string[],
    wantsToLearn: string[]
}

export type TUser = {
    _id: string,
    avatar: string,
    name: string,
    city: string,
    age: number
}

export type TAppState = {
    currentUser: TUser | null;
    isAuth: boolean;
    favorites: TSkill[];
}
