import {createContext} from 'react';

import {
    ProviderType,
    WeaponsContextType,
} from '../utils/types/WeaponsContextTypes.types';

export const WeaponsContext = createContext<WeaponsContextType | null>(null);

function WeaponsContextProvider({weaponContext, children}: ProviderType) {
    return (
        <WeaponsContext.Provider value={weaponContext}>
            {children}
        </WeaponsContext.Provider>
    );
}

export {WeaponsContextProvider};
