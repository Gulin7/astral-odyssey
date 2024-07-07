import {ReactNode} from 'react';
import {User} from '../../models/User';

export type UserContextType = {
    user?: User | null;
    setUser: (user: User | null) => void;
};

export type ProviderType = {
    userContext: UserContextType;
    children: ReactNode;
};
