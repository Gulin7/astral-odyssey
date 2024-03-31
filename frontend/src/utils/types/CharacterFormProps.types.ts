import Character from '../../../../models/Character';

export type CharacterFormType = {
    idInput: React.RefObject<HTMLInputElement>;
    nameInput: React.RefObject<HTMLInputElement>;
    classInput: React.RefObject<HTMLInputElement>;
    raceInput: React.RefObject<HTMLInputElement>;
    playerIdInput: React.RefObject<HTMLInputElement>;
    givenCharacter?: Character;
};
