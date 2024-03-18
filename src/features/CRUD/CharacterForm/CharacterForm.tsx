import Character from '../../../models/Character';
import {CharacterFormType} from '../../../utils/types/CharacterFormProps.types';
import {CharacterFormEntry} from '../CharacterFormEntry/CharacterFormEntry';

import './CharacterForm.css';

type CharacterFormEntryType = {
    label: string;
    ref: React.RefObject<HTMLInputElement>;
    placeHolder: string;
    defaultValue: string;
    disabled: boolean;
};

function setCharacterFormEntriesForCharacter(
    formEntries: CharacterFormEntryType[],
    givenCharacter: Character | undefined,
) {
    if (givenCharacter !== undefined) {
        formEntries[0].disabled = true;

        formEntries[0].defaultValue = givenCharacter.getId().toString();
        formEntries[1].defaultValue = givenCharacter.getName();
        formEntries[2].defaultValue = givenCharacter.getCharClass();
        formEntries[3].defaultValue = givenCharacter.getRace();
    }

    return formEntries;
}

function createFormEntries(props: CharacterFormType) {
    let formEntries = [
        {
            label: 'Character ID',
            ref: props.idInput,
            placeHolder: 'Enter ID',
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'Character Name',
            ref: props.nameInput,
            placeHolder: 'Enter name',
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'Character Class',
            ref: props.classInput,
            placeHolder: 'Enter class',
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'Character Race',
            ref: props.raceInput,
            placeHolder: 'Enter race',
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'Player ID',
            ref: props.playerIdInput,
            placeHolder: 'Enter player ID',
            defaultValue: '',
            disabled: false,
        },
    ];

    formEntries = setCharacterFormEntriesForCharacter(
        formEntries,
        props.givenCharacter,
    );

    return formEntries;
}

export function CharacterForm(props: CharacterFormType) {
    const formEntries = createFormEntries(props);

    return (
        <div className='character-form-div' data-testid='character-form-id'>
            <form className='character-form'>
                {formEntries.map((entry) => (
                    <CharacterFormEntry
                        key={entry.label}
                        ref={entry.ref}
                        label={entry.label}
                        placeHolder={entry.placeHolder}
                        defaultValue={entry.defaultValue}
                        disabled={entry.disabled}
                    />
                ))}
            </form>
        </div>
    );
}
