import {ReactNode} from 'react';
import Character from '../../models/Character';

export type CharactersContextType = {
    characters: Character[];
    addCharacter: (characters: Character) => void;
    removeCharacter: (characterId: number) => void;
};

export type ProviderType = {
    characterContext: CharactersContextType;
    children: ReactNode;
};
