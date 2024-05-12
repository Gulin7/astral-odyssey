import {createContext} from 'react';
import {
    ProviderType,
    UserContextType,
} from '../utils/types/UserContextTypes.types';

export const UserContext = createContext<UserContextType | null>(null);

export function UserContextProvider({userContext, children}: ProviderType) {
    return (
        <UserContext.Provider value={userContext}>
            {children}
        </UserContext.Provider>
    );
}
