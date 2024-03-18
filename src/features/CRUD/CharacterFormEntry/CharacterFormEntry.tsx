import {forwardRef} from 'react';

import {FormEntryProps} from '../../../utils/types/FormEntryProps.types';
import './CharacterFormEntry.css';

const CharacterFormEntry = forwardRef<HTMLInputElement, FormEntryProps>(
    (props, ref) => {
        return (
            <div
                className='character-form-entry'
                data-testid='character-form-entry-test-id'
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
                        data-testid='character-form-input-test-id'
                        placeholder={props.placeHolder}
                        disabled={props.disabled}
                    />
                ) : (
                    <input
                        className='character-form-input'
                        type='text'
                        id={props.label}
                        ref={ref}
                        data-testid='character-form-input-test-id'
                        placeholder={props.defaultValue}
                        disabled={props.disabled}
                        defaultValue={props.defaultValue}
                    />
                )}
            </div>
        );
    },
);

export {CharacterFormEntry};
