import {Player} from '../../../../../models/Player';
import {FormEntryProps} from '../../../utils/types/FormEntryProps.types';
import {PlayerFormType} from '../../../utils/types/PlayerFormProps.types';
import {PlayerFormEntry} from '../PlayerFormEntry/PlayerFormEntry';
import './PlayerForm.css';

function setPlayerFormEntriesForPlayer(
    formEntries: FormEntryProps[],
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
            ref: props.idInput,
            placeHolder: 'Enter ID',
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'Username',
            ref: props.usernameInput,
            placeHolder: 'Enter username',
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'Nickname',
            ref: props.nicknameInput,
            placeHolder: 'Enter nickname',
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'URL',
            ref: props.urlInput,
            placeHolder: 'Enter URL',
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
        <div className='player-form-div' data-testid='player-form-test-id'>
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
