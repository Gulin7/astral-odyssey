import {forwardRef} from 'react';
import {PlayerFormEntryProps} from '../../../utils/types/PlayerFormEntryProps.types';
import './PlayerFormEntry.css';

const PlayerFormEntry = forwardRef<HTMLInputElement, PlayerFormEntryProps>(
    (props, ref) => {
        return (
            <div
                className='player-form-entry'
                data-testid='player-form-entry-id'
            >
                <label className='player-form-label' htmlFor={props.label}>
                    {props.label}
                </label>
                {props.defaultValue === '' ? (
                    <input
                        className='player-form-input'
                        type='text'
                        id={props.label}
                        ref={ref}
                        data-testid='player-form-input-id'
                        placeholder={props.placeHolder}
                        disabled={props.disabled}
                    />
                ) : (
                    <input
                        className='player-form-input'
                        type='text'
                        id={props.label}
                        ref={ref}
                        data-testid='player-form-input-id'
                        placeholder={props.defaultValue}
                        disabled={props.disabled}
                        defaultValue={props.defaultValue}
                    />
                )}
            </div>
        );
    },
);

export {PlayerFormEntry};
