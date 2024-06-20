import {forwardRef} from 'react';

import {FormEntryProps} from '../../../utils/types/FormEntryProps.types';
import './WeaponFormEntry.css';

const WeaponFormEntry = forwardRef<HTMLInputElement, FormEntryProps>(
    (props, ref) => {
        return (
            <div
                className='weapon-form-entry'
                data-testid='weapon-form-entry-test-id'
            >
                <label className='weapon-form-label' htmlFor={props.label}>
                    {props.label}
                </label>
                {props.defaultValue === '' ? (
                    <input
                        className='weapon-form-input'
                        type='text'
                        id={props.label}
                        ref={ref}
                        data-testid='weapon-form-input-test-id'
                        placeholder={props.placeHolder}
                        disabled={props.disabled}
                    />
                ) : (
                    <input
                        className='weapon-form-input'
                        type='text'
                        id={props.label}
                        ref={ref}
                        data-testid='weapon-form-input-test-id'
                        placeholder={props.defaultValue}
                        disabled={props.disabled}
                        defaultValue={props.defaultValue}
                    />
                )}
            </div>
        );
    },
);

export {WeaponFormEntry};
