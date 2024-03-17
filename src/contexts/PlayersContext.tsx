import {createContext} from 'react';

import {
    PlayersContextType,
    ProviderType,
} from '../utils/types/PlayersContextTypes.types';

export const PlayersContext = createContext<PlayersContextType | null>(null);

function PlayersContextProvider({playerContext, children}: ProviderType) {
    return (
        <PlayersContext.Provider value={playerContext}>
            {children}
        </PlayersContext.Provider>
    );
}

export {PlayersContextProvider};
