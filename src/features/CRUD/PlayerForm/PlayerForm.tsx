import {Player} from '../../../models/Player';
import {PlayerFormType} from '../../../utils/types/PlayerFormProps.types';
import {PlayerFormEntry} from '../PlayerFormEntry/PlayerFormEntry';
import './PlayerForm.css';

type PlayerFormEntryType = {
    label: string;
    ref: React.RefObject<HTMLInputElement>;
    placeHolder: string;
    defaultValue: string;
    disabled: boolean;
};

function setPlayerFormEntriesForPlayer(
    formEntries: PlayerFormEntryType[],
    givenPlayer: Player | undefined,
) {
    if (givenPlayer !== undefined) {
        formEntries[0].disabled = true;

        formEntries[0].defaultValue = givenPlayer.getId().toString();
        formEntries[1].defaultValue = givenPlayer.getUsername();
        formEntries[2].defaultValue = givenPlayer.getNickname();
        formEntries[3].defaultValue = givenPlayer.getPictureUrl();
    }

    return formEntries;
}

function createFormEntries(props: PlayerFormType) {
    let formEntries = [
        {
            label: 'ID',
            ref: props.id,
            placeHolder: 'Enter ID',
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'Username',
            ref: props.username,
            placeHolder: 'Enter username',
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'Nickname',
            ref: props.nickname,
            placeHolder: 'Enter nickname',
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'Picture URL',
            ref: props.pictureUrl,
            placeHolder: 'Enter picture URL',
            defaultValue: '',
            disabled: false,
        },
    ];

    formEntries = setPlayerFormEntriesForPlayer(formEntries, props.givenPlayer);

    return formEntries;
}

export function PlayerForm(props: PlayerFormType) {
    const formEntries = createFormEntries(props);

    return (
        <div className='player-form-div' data-testid='player-form-id'>
            <form className='player-form'>
                {formEntries.map((entry) => (
                    <PlayerFormEntry
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
