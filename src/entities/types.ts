export type TSkill = {
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