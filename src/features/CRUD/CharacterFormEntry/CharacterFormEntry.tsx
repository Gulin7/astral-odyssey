import {forwardRef} from 'react';
import {CharacterFormEntryProps} from '../../../utils/types/CharacterFormEntryProps.types';

import './CharacterFormEntry.css';

const CharacterFormEntry = forwardRef<
    HTMLInputElement,
    CharacterFormEntryProps
>((props, ref) => {
    return (
        <div
            className='character-form-entry'
            data-testid='character-form-entry-id'
        >
            <label className='character-form-label' htmlFor={props.label}>
                {props.label}
            </label>
            {props.defaultValue === '' ? (
                <input
                    className='character-form-input'
                    type='text'
                    id={props.label}
                    ref={ref}
                    data-testid='character-form-input-id'
                    placeholder={props.placeHolder}
                    disabled={props.disabled}
                />
            ) : (
                <input
                    className='character-form-input'
                    type='text'
                    id={props.label}
                    ref={ref}
                    data-testid='character-form-input-id'
                    placeholder={props.defaultValue}
                    disabled={props.disabled}
                    defaultValue={props.defaultValue}
                />
            )}
        </div>
    );
});

export {CharacterFormEntry};
