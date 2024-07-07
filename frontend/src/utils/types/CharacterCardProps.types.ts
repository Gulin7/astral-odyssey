import Character from '../../models/Character';

export type CharacterCardPropsType = {
    givenCharacter: Character;
    removeCharacter: (CharacterId: string) => void;
};
