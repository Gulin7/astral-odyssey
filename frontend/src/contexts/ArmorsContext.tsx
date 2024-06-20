import {createContext} from 'react';

import {
    ArmorsContextType,
    ProviderType,
} from '../utils/types/ArmorsContextTypes.types';

export const ArmorsContext = createContext<ArmorsContextType | null>(null);

function ArmorsContextProvider({armorContext, children}: ProviderType) {
    return (
        <ArmorsContext.Provider value={armorContext}>
            {children}
        </ArmorsContext.Provider>
    );
}

export {ArmorsContextProvider};
