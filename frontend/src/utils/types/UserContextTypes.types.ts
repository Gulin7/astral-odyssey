import {ReactNode} from 'react';
import {User} from '../../models/User';

export type UserContextType = {
    user?: User;
    setUser: (user: User) => void;
};

export type ProviderType = {
    userContext: UserContextType;
    children: ReactNode;
};
