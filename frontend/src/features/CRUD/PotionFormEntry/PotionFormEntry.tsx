import {forwardRef} from 'react';

import {FormEntryProps} from '../../../utils/types/FormEntryProps.types';
import './PotionFormEntry.css';

const PotionFormEntry = forwardRef<HTMLInputElement, FormEntryProps>(
    (props, ref) => {
        return (
            <div
                className='potion-form-entry'
                data-testid='potion-form-entry-test-id'
            >
                <label className='potion-form-label' htmlFor={props.label}>
                    {props.label}
                </label>
                {props.defaultValue === '' ? (
                    <input
                        className='potion-form-input'
                        type='text'
                        id={props.label}
                        ref={ref}
                        data-testid='potion-form-input-test-id'
                        placeholder={props.placeHolder}
                        disabled={props.disabled}
                    />
                ) : (
                    <input
                        className='potion-form-input'
                        type='text'
                        id={props.label}
                        ref={ref}
                        data-testid='potion-form-input-test-id'
                        placeholder={props.defaultValue}
                        disabled={props.disabled}
                        defaultValue={props.defaultValue}
                    />
                )}
            </div>
        );
    },
);

export {PotionFormEntry};
