import {User} from '../../models/User';

export type LoginFormType = {
    // idInput: React.RefObject<HTMLInputElement>;
    usernameInput: React.RefObject<HTMLInputElement>;
    passwordInput: React.RefObject<HTMLInputElement>;
    givenUser?: User;
};
