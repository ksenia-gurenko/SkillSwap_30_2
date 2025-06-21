import { createContext, useEffect, useReducer } from "react";
import type { TAppState } from "../types";
import { LOCAL_STORAGE_KEY, type Action } from "./type";

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
        case 'SET_USER':
            return { ...state, currentUser: action.payload };
        case 'SET_AUTH':
            return { ...state, isAuth: action.payload };
        case 'ADD_FAVORITE':
            return { ...state, favorites: [...state.favorites, action.payload] };
        case 'REMOVE_FAVORITE':
            return { ...state, favorites: state.favorites.filter(fav => fav._id !== action.payload) };
        case 'RESET':
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
