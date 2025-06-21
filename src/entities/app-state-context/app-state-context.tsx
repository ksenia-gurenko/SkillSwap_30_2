import { createContext, useEffect, useReducer } from "react";
import type { TAppState } from "../types";
import { LOCAL_STORAGE_KEY, type Action } from "./type";
import { ACTION_TYPE } from "../../shared/lib/constants";

const initialState: TAppState = {
    currentUser: null,
    isAuth: false,
    favorites: [],
};

export const AppStateContext = createContext<{
    state: TAppState;
    dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const reducer = (state: TAppState, action: Action): TAppState => {
    switch (action.type) {
        case ACTION_TYPE.SET_USER:
            return { ...state, currentUser: action.payload };
        case ACTION_TYPE.SET_AUTH:
            return { ...state, isAuth: action.payload };
        case ACTION_TYPE.ADD_FAVORITE:
            if (state.favorites.some(fav => fav._id === action.payload._id)) {
                return state;
            }
            return { ...state, favorites: [...state.favorites, action.payload] };
        case ACTION_TYPE.REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(fav => fav._id !== action.payload)
            };
        case ACTION_TYPE.RESET:
            return initialState;
        default:
            return state;
    }
};

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState, () => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        return saved ? JSON.parse(saved) : initialState;
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
};
