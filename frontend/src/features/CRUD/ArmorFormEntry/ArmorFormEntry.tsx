import {forwardRef} from 'react';

import {FormEntryProps} from '../../../utils/types/FormEntryProps.types';
import './ArmorFormEntry.css';

const ArmorFormEntry = forwardRef<HTMLInputElement, FormEntryProps>(
    (props, ref) => {
        return (
            <div
                className='armor-form-entry'
                data-testid='armor-form-entry-test-id'
            >
                <label className='armor-form-label' htmlFor={props.label}>
                    {props.label}
                </label>
                {props.defaultValue === '' ? (
                    <input
                        className='armor-form-input'
                        type='text'
                        id={props.label}
                        ref={ref}
                        data-testid='armor-form-input-test-id'
                        placeholder={props.placeHolder}
                        disabled={props.disabled}
                    />
                ) : (
                    <input
                        className='armor-form-input'
                        type='text'
                        id={props.label}
                        ref={ref}
                        data-testid='armor-form-input-test-id'
                        placeholder={props.defaultValue}
                        disabled={props.disabled}
                        defaultValue={props.defaultValue}
                    />
                )}
            </div>
        );
    },
);

export {ArmorFormEntry};
