import type { ACTION_TYPE } from "../../shared/lib/constants";
import type { TSkill, TUser } from "../types";

export const LOCAL_STORAGE_KEY = 'app_state_v1';

export type Action =
    | { type: ACTION_TYPE.SET_USER; payload: TUser | null }
    | { type: ACTION_TYPE.SET_AUTH; payload: boolean }
    | { type: ACTION_TYPE.ADD_FAVORITE; payload: TSkill }
    | { type: ACTION_TYPE.REMOVE_FAVORITE; payload: string }
    | { type: ACTION_TYPE.RESET };
