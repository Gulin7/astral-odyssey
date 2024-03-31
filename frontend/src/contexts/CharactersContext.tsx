import {createContext} from 'react';

import {
    CharactersContextType,
    ProviderType,
} from '../utils/types/CharactersContextTypes.types';

export const CharactersContext = createContext<CharactersContextType | null>(
    null,
);

function CharactersContextProvider({characterContext, children}: ProviderType) {
    return (
        <CharactersContext.Provider value={characterContext}>
            {children}
        </CharactersContext.Provider>
    );
}

export {CharactersContextProvider};
