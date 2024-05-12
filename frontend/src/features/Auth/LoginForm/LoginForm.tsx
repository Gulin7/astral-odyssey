import {User} from '../../../models/User';
import {FormEntryProps} from '../../../utils/types/FormEntryProps.types';
import {LoginFormType} from '../../../utils/types/LoginFormProps.types';
import {LoginFormEntry} from '../LoginFormEntry/LoginFormEntry';

import './LoginForm.css';

function setLoginFormEntries(
    formEntries: FormEntryProps[],
    givenUser: User | undefined,
) {
    if (givenUser !== undefined) {
        formEntries[0].defaultValue = givenUser.getUsername();
        formEntries[1].defaultValue = givenUser.getPassword();
    }

    return formEntries;
}

function createFormEntries(props: LoginFormType) {
    let formEntries = [
        {
            label: 'Username',
            ref: props.usernameInput,
            placeHolder: 'Enter username',
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'Password',
            ref: props.passwordInput,
            placeHolder: 'Enter password',
            defaultValue: '',
            disabled: false,
        },
    ];

    formEntries = setLoginFormEntries(formEntries, props.givenUser);

    return formEntries;
}

export function LoginForm(props: LoginFormType) {
    const formEntries = createFormEntries(props);

    return (
        <div className='login-form-div' data-testid='login-form-test-id'>
            <form className='login-form'>
                {formEntries.map((formEntry) => (
                    <LoginFormEntry
                        key={formEntry.label}
                        label={formEntry.label}
                        defaultValue={formEntry.defaultValue}
                        placeHolder={formEntry.placeHolder}
                        disabled={formEntry.disabled}
                        ref={formEntry.ref}
                    />
                ))}
            </form>
        </div>
    );
}
