import {ReactNode} from 'react';
import {Player} from '../../../../models/Player';

export type PlayersContextType = {
    players: Player[];
    addPlayer: (players: Player) => void;
    removePlayer: (playerId: number) => void;
};

export type ProviderType = {
    playerContext: PlayersContextType;
    children: ReactNode;
};
