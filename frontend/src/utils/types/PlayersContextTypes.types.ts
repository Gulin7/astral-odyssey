import {ReactNode} from 'react';
import {Player} from '../../models/Player';

export type PlayersContextType = {
    players: Player[];
    addPlayer: (players: Player) => void;
    removePlayer: (playerId: string) => void;
};

export type ProviderType = {
    playerContext: PlayersContextType;
    children: ReactNode;
};
