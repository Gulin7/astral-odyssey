import {ReactNode} from 'react';
import Character from '../../models/Character';

export type CharactersContextType = {
    characters: Character[];
    addCharacter: (Characters: Character) => void;
    removeCharacter: (CharacterId: number) => void;
};

export type ProviderType = {
    characterContext: CharactersContextType;
    children: ReactNode;
};
