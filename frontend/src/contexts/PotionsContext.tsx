import {createContext} from 'react';

import {
    PotionsContextType,
    ProviderType,
} from '../utils/types/PotionsContextTypes.types';

export const PotionsContext = createContext<PotionsContextType | null>(null);

function PotionsContextProvider({potionContext, children}: ProviderType) {
    return (
        <PotionsContext.Provider value={potionContext}>
            {children}
        </PotionsContext.Provider>
    );
}

export {PotionsContextProvider};
