import {User} from '../../../models/User';
import {FormEntryProps} from '../../../utils/types/FormEntryProps.types';
import {SignupFormType} from '../../../utils/types/SignupFormProps.types';
import {SignupFormEntry} from '../SignupFormEntry/SignupFormEntry';

function setSignupFormEntries(
    formEntries: FormEntryProps[],
    givenUser: User | undefined,
) {
    if (givenUser !== undefined) {
        formEntries[0].defaultValue = givenUser.getUsername();
        formEntries[1].defaultValue = givenUser.getEmail();
    }

    return formEntries;
}

function createFormEntries(props: any) {
    let formEntries = [
        {
            label: 'Username',
            ref: props.usernameInput,
            placeHolder: 'Enter username',
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'Email',
            ref: props.emailInput,
            placeHolder: 'Enter email',
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
        {
            label: 'Confirm Password',
            ref: props.confirmedPasswordInput,
            placeHolder: 'Enter password again',
            defaultValue: '',
            disabled: false,
        },
    ];

    formEntries = setSignupFormEntries(formEntries, props.givenUser);

    return formEntries;
}

export function SignupForm(props: SignupFormType) {
    const formEntries = createFormEntries(props);

    return (
        <div className='signup-form-div' data-testid='signup-form-test-id'>
            <form className='signup-form'>
                {formEntries.map((formEntry) => (
                    <SignupFormEntry
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
