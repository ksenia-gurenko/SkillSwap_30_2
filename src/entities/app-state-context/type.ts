import type { TSkill, TUser } from "../types";

export const LOCAL_STORAGE_KEY = 'app_state_v1';

export type Action =
    | { type: 'SET_USER'; payload: TUser | null }
    | { type: 'SET_AUTH'; payload: boolean }
    | { type: 'ADD_FAVORITE'; payload: TSkill }
    | { type: 'REMOVE_FAVORITE'; payload: string }
    | { type: 'RESET' };
