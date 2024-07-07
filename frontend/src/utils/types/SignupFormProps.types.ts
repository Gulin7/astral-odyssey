import {User} from '../../models/User';

export type SignupFormType = {
    // idInput: React.RefObject<HTMLInputElement>;
    usernameInput: React.RefObject<HTMLInputElement>;
    emailInput: React.RefObject<HTMLInputElement>;
    passwordInput: React.RefObject<HTMLInputElement>;
    confirmedPasswordInput: React.RefObject<HTMLInputElement>;
    givenUser?: User;
};
